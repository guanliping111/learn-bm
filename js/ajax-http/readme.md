## 2020-4-25
## 应用层协议
前端 -> http -> 后端（数据库）

## 同步
一行接着一行执行
## 异步
代码书写的顺序 并不是执行的顺序

## node
- js
- 页面
- 网络

 js只是在浏览器里运行
 启动node : node.js
## 访问方式
 1. 双击
 2. live-server
 http协议
 127.0.0.1
 =locahost 域名

 ## http 规定
 - 请求行
  - 方法: GET juejin.com?query=js
   - url: juejin.com?query=js
    - 版本：1.1

- 首部
 - key:value
  - Content-Type

- 实体
 - 传输的具体数据

## 总结一下 就是 
前端用 ajax 发送请求 
后端node req 接收 
后端 node res 发出响应 
前端ajax onreadystatechange接收渲染