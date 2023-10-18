<h2 align="center">TarsusCloud</h2>
<p align="center"><b>基于 TypeScript、Fastify、NodeJs 的工具库，包含FASS云函数平台、Web数据库管理工具、低代码平台</b></p>

# 目录

- [目录](#目录)
  - [安装](#安装)
  - [快速入门](#快速入门)
    - [FASS平台](#fass平台)
    - [Web可视化数据库管理工具](#web可视化数据库管理工具)
  - [维护者](#维护者)

## 安装

````shell
git clone https://github.com/chelizichen/TarsusCloud.git  --recursive
cd TarsusCloudServer
npm i 
cd TarsusCloudWebServer
npm i 
node run-all-script.js
````

## 快速入门

首先确保您的本地环境包含 Node、Mysql、Redis

### FASS平台

云函数托管平台，用户可以自己写入函数，远程调用。

### Web可视化数据库管理工具

为了方便查看测试环境数据库的数据
该项目集成了一套数据库管理系统

并且在本地的
/tarsuscloud/database
路径上可以直接查看对应的数据表

但前提是你需要先对数据库进行配置
配置文件在 TarsusCloudServer/src/env.ts里

在启动项目前，还需要配置环境
在 TarsusCloudServer/src 目录下新创建 env.ts

````shell
cd TarsusCloudServer/src
touch env.ts
````

然后将下面的代码复制到该TS文件中，有两个选项

````ts
import { PoolOptions } from "mysql2";
import path from "path";

// *************** set env
const routes_path = path.resolve(__dirname, "routes")
const taro_path = path.resolve(__dirname, "taro")
process.env.routes_path = routes_path;
process.env.taro_path = taro_path;
process.env.IsProd = '0';
process.env.IsOnlyDB = '1';


let poolConfig : PoolOptions;

if(Number(process.env.IsOnlyDB) == 1){
    // 此处填写对应的数据库信息
    poolConfig = {
        user: "root", 
        password: "root",
        port: 3306,
        host: "host",
        database: "db",
        connectionLimit: 10,
    }
}else{
     // 本地环境
     poolConfig = {
        user: "root",
        password: "123456",
        port: 3306,
        host: "localhost",
        database: "yourdatabase",
        connectionLimit: 10,
    }
}

process.env.poolConfig = JSON.stringify(poolConfig)
// set env ***************
export {
    routes_path,
    taro_path
}
````

当这些文件copy完，依赖下载完以后就可以查看数据库了

## 维护者

<table>
    <tbody>
        <tr>
            <td>
                <a target="_blank" href="https://github.com/chelizichen"><img width="60px" src="https://avatars.githubusercontent.com/u/86051766?v=4"></a>
            </td>
        </tr>
    </tbody>
</table>
