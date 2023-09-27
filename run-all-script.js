const { exec, execSync } = require('child_process');
const path = require('path');

function execServer(servers) {
  servers.forEach((server) => {
    const { dir, script } = server;

    // 更改目录到指定的路径
    const absPath = path.resolve(__dirname, dir);

    // 在给定目录中执行指定的脚本
    const child = exec(script, { cwd: absPath }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing script in ${absPath}: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
    });

    // 监听脚本输出和错误
    child.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    child.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  });
}

// 使用示例
execServer([
  { dir: './TarsusCloudServer', script: 'npm run dev' },
  { dir: './TarsusCloudWebServer', script: 'npm run dev' },
  { dir: './TarsusCloudProxyServer',script: './build'}
]);
