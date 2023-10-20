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

在 TarsusCloudServer项目下配置 env.local文件即可

````txt
IsProd=0

db_user=root
db_password=123456
db_port=3306
db_host=localhost
db_database=serverless
db_connectionLimit=10
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
