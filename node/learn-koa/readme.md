## Tecent 腾讯
  c语言  c++  js  go java python
基石
QQ 连接一切 即时通讯 TCP/IP 协议


## koa
- koa  基于node.js 平台下的web 开发网站
  Koa 是一个新的 web 框架
    Koa 应用程序是一个包含一组中间件函数的对象，它是按照类似堆栈的方式组织和执行的。 
    Koa 类似于你可能遇到过的许多其他中间件系统，例如 Ruby 的 Rack ，Connect 等，
    然而，一个关键的设计点是在其低级中间件层中提供高级“语法糖”。 
    这提高了互操作性，稳健性，并使书写中间件更加愉快。
blog 网站

基石
 koa 加速了 node web 开发一个web服务器 就是一个web app
 koa 在 3000 端口提供了http协议访问服务

- koa 的API
 - use
 - listen

 http.createServer()  启动服务
 
 ## http协议

 - ctx context 上下文环境（request response）
 - 诞生于 1991年 用于传输学术论文的
 - 采用基于请求（ctx.request）响应（ctx.response）的模式，在网络间传输HTML
 - HTTP基于TCP协议
    ▪ 应用层    HTTP
    TCP 连接 三次握手
    ▪ 表示层
    ▪ 会话层
    ▪ 传输层    TCP
    ▪ 网络层
    ▪ 数据链路层


 比较
- readFileSync 同步读取文件
  同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果。
 fs.readFileSync
 
- readFile  异步读取文件


## HTTP
- http req + res
- req res之间的关系 
 n : 1
 n很大 高并发 卡
 createServer I/O file 数据库
 Go 多核计算
 php(同步 阻塞) python
 
 TCP 传输控制协议 通信管道  stream

- writeHead 


## 引入koa-static 处理静态资源
- 方法1 
```js
if (ctx.request.url === '/liying.jpg') {
    ctx.response.type = 'image';//css html
    ctx.response.body = fs.createReadStream('./liying.jpg');  //./common.css

```
- 方法2  koa-static  静态引入
 1. 安装依赖库 
  npm install koa-static
 2.  在index.js引入依赖库：
  const KoaStatic = require('koa-static');
 3. 使用koastatic, 我们在index.js注掉方式一的代码，在其后添加如下代码
  app.use(KoaStatic('./'));
