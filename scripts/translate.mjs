import { OmPipe } from 'ompipe';
import { OpenAI } from 'openai';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import simpleGit from 'simple-git';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const project = path.join(__dirname, '..');
const git = simpleGit();

if (!process.env.DEEPSEEK_API_TOKEN) {
    console.error(chalk.red('请设置环境变量 DEEPSEEK_API_TOKEN'));
    process.exit(1);
}

// 初始化DeepSeek客户端
const client = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_TOKEN,
    baseURL: 'https://api.deepseek.com/v1'
});

const log = await git.log({n: 1});
const lastCommitMessage = log.latest.hash;
const pipe = new OmPipe('translate-docs:' + lastCommitMessage.toString());

async function translateText(text, targetLangID) {
    const prompt = `将以下内容准确翻译为ISO编码为 ${targetLangID} 的语言。请严格遵循以下要求翻译内容：
1. 不要添加任何解释、说明或额外文本
2. 直接返回翻译后的内容，不要包含任何前缀或后缀

需要翻译的内容：
${text}`;    

    const response = await client.chat.completions.create({
        model: 'deepseek-chat',
        messages: [
            { role: 'system', content: '你是一名专业的翻译助手' },
            { role: 'user', content: prompt }
        ],
        temperature: 0.6
    });

    return response.choices[0].message.content;
}

// 使用示例
// const translated = await translateText('你好', 'ja');
// console.log(translated); // "こんにちは"

async function processFile(filePath, targetPath, targetLangID) {
    const content = fs.readFileSync(filePath, 'utf8');

    if (content.trim() === '') {
        console.log(chalk.yellow(`跳过空文件: ${filePath}`));
        return;
    }

    const translated = await translateText(content, targetLangID);
    if (translated.trim() === '') {
        throw new Error(`翻译失败: ${filePath}`);
    }
    fs.writeFileSync(targetPath, translated);
}

async function traverseAndTranslate(srcDir, destDir, targetLangID) {
    const files = fs.readdirSync(srcDir);

    for (const file of files) {
        const fullPath = path.join(srcDir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            const newDestDir = path.join(destDir, file);
            if (!fs.existsSync(newDestDir)) {
                fs.mkdirSync(newDestDir, { recursive: true });
                console.log(chalk.cyan(`创建目录: ${newDestDir}`));
            }
            await traverseAndTranslate(fullPath, newDestDir, targetLangID);
        } else if (file.endsWith('.md')) {
            const destPath = path.join(destDir, file);
            // 添加任务
            pipe.add('translate:' + destPath, async () => {
                await processFile(fullPath, destPath, targetLangID);
            }, { critical: false, maxRetryCount: 2 });
        }
    }
}


const zhDir = path.join(__dirname, '../zh');
const jaDir = path.join(__dirname, '../ja');
const enDir = path.join(__dirname, '..');

console.log(chalk.bold('开始翻译任务'));

await traverseAndTranslate(zhDir, jaDir, 'ja');
// await traverseAndTranslate(zhDir, enDir);

await pipe.start();

console.log(chalk.bold.green('✓ 所有文件翻译完成'));