## 2020 5-22
## 跨域
 参考网站：https://segmentfault.com/a/1190000015597029
          https://juejin.im/post/5815f4abbf22ec006893b431
 是一种浏览安全策略机制

- 跨域：一个域向另一个域发出请求，
  同源：同协议（http/https）,同域名 同端口

- 同源策略场景
 1. 针对接口的请求 
    cookie  目的是让服务端知道谁发出的这次请求
 2. 针对DOM的查询

前后端分开部署 前后端有各自的域名

## http 头
请求头：
accept

响应头： 
Set-Cookie

通用头： 
Content-Type：
- 请求的时候带给后端的内容的类型: text/plain, formdata, application/json
- 后端告诉前端我给的资源的类型：MIME

## 跨域正确的打开方式
- 同源策略限制下接口请求的正确打开方式
1. JSONP
 - html标签如 script、img  没有跨域限制
 - JSON给后端返回了什么
   返回了一个函数名 和要输出的字符串: onResponse(["js","php"])
   
 - JSONP方案原理就是通过动态创建script标签，利用标签内src属性发送同步请求，并利用回调
   函数的方式实现异步数据的回调从而完成与后台交互的功能。当然除了jsonp方案使用script
   标签发送请求的办法外，还能通过img标签的src属性也同样能发送请求(这个不是jsonp)。

 - 可以通过浏览器控制台Network选项查看发现，JSONP 发出去的请求类型是script, 
   img标签 src属性发出去的请求类型是JSON,他们都不是xhr,因为没有形成跨域的第三个条件，
   因此不会触发浏览器跨域检查策略。这就是为什么JSONP方案能处理解决跨域问题的原因。

 - 我们标记dataType为jsonp来标识这是一个jsonp请求，jQuery 会帮助我们事先动态创建
   script标签并设置为异步请求和发送请求等功能，并将script标签插入到htm1的头部上




2. 空iframe加form
3. CORS
 - 跨域资源共享"（Cross-origin resource sharing）
 - 两种请求
    1. 简单请求
        1): 请求方式只能是：head，get，post
        2): 请求头允许的字段：
        1. Content-Type
        2. Access-Control-Expose-Headers
        3. Access-Control-Allow-Origin
        4. Access-Control-Allow-Methods
        5. Access-Control-Max-Age
        6. Access-Control-Allow-Headers
        7. Access-Control-Allow-Credentials

    2. 非简单请求
       - 预检请求 OPTION preflight /api  返回 204
       - 真实请求 POST /api 返回 200
       这里通过前端发请求的时候增加一个额外的headers来触发非简单请求。
4. 代理

- 同源策略限制下Dom查询的正确打开方式
1. postMessage
   window.postMessage() 是HTML5的一个接口，专注实现不同窗口不同页面的跨域通讯。
2. document.domain
  这种方式只适合主域名相同，但子域名不同的iframe跨域
3. canvas操作图片的跨域问题