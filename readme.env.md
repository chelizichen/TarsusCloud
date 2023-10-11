# DBManage

为了方便查看测试环境数据库的数据
该项目集成了一套数据库管理系统

并且在本地的
/tarsuscloud/database
路径上可以直接查看对应的数据表

但前提是你需要先对数据库进行配置
配置文件在 TarsusCloudServer/src/env.ts里
下面是配置文件示例

````ts
import { PoolOptions } from "mysql2";
import path from "path";

// *************** set env
const routes_path = path.resolve(__dirname, "routes")
const taro_path = path.resolve(__dirname, "taro")
process.env.routes_path = routes_path;
process.env.taro_path = taro_path;
process.env.IsProd = '0';
process.env.IsUp = '0';


let poolConfig : PoolOptions;

if(Number(process.env.IsUp) == 0){
    // 测试环境
    poolConfig = {

    }
}else{
    // 本地环境
    poolConfig = {
        user: "root",
        password: "123456",
        port: 3306,
        host: "localhost",
        database: "serverless",
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
