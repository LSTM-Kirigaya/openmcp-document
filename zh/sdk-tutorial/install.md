# 安装

openmcp-sdk 目前只支持 esm 的构建方式，所以，在安装之前，请先安装一个 esm 的开发环境：


```bash
mkdir clever-agent && cd clever-agent
npm init -y
npm install typescript tsx @types/node --save-dev
tsc --init
```

记得在 package.json 中设置 `"type": "module"`

然后通过下面就可以安装 openmcp-sdk 了：

```bash
npm install openmcp-sdk
```

我们强烈推荐通过 tsx 工具来运行和部署您的 agent：

```bash
npx tsx /path/to/agent.ts
```