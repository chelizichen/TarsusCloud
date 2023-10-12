# DBManage

为了方便查看测试环境数据库的数据
该项目集成了一套数据库管理系统

并且在本地的
/tarsuscloud/database
路径上可以直接查看对应的数据表

但前提是你需要先对数据库进行配置
配置文件在 TarsusCloudServer/src/env.ts里
下面是配置文件示例

## PRE

1. 首先需要安装 node v16 , redis , mysql
2. 其次将代码copy到本地 git clone https://github.com/chelizichen/TarsusCloud.git  --recursive
3. 然后分别下载 TarsusCloudServer 和 TarsusCloudWebServer 的 npm 依赖
   1. cd TarsusCloudServer | TarsusCloudWebServer
   2. npm i
4. 到 TarsusCloud目录下 执行 node run-all-script.js

## START

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

http://localhost:5173/tarsuscloud/database