## 2020 5-22
## 跨域
浏览安全策略

- 一个域向另一个域发出请求，
同源：同协议（http/https）,同域名 同端口

前后端分开部署 前后端有各自的域名

- 简单请求：
1): 请求方式只能是：head，get，post
2): 请求头允许的字段：Accept，Accept-Language，Content-Language，Last-Event-ID
Content-Type：application/x-www-form-urlencoded、multipart/form-data、text/plain 三选一

CORS: cross origin resouce share
 1. Content-Type
 2. Access-Control-Expose-Headers
 3. Access-Control-Allow-Origin
 4. Access-Control-Allow-Methods
 5. Access-Control-Max-Age
 6. Access-Control-Allow-Headers
 7. Access-Control-Allow-Credentials