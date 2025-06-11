import simpleGit from 'simple-git';
const git = simpleGit();

export async function getLatestCommitId() {
  // 方法1：使用log获取最新commit
  const log = await git.log({n: 1});
  console.log('Latest commit ID:', log.latest.hash);
}

// 如果需要在模块外调用
await getLatestCommitId();