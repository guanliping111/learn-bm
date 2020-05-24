const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{
        // origin
        'Content-Type': 'application/json',
        'Access-Control-Expose-Headers': 'Access-Control-Allow-Origin',
        'Access-Control-Allow-Origin':'http://localhost:8080',
        'Access-Control-Allow-Methods':'*', // * 也是可以的 允许任何get post
        'Access-Control-Max-Age': -1,    // 禁用缓存  preflight 预检请求结果缓存的时间 
        'Access-Control-Allow-Headers': 'content-type, X-Requested-With',
        'Access-Control-Allow-Credentials':true // 表示是否可以将对请求的响应暴露给页面。返回true则可以，其他值均不可以。
        // 凭证 cookie, 允许前端请求携带 cookie
    })
    // cookie： 相当于 localstorage, cookie 随着请求头自动发送
    let posts = ['js','php'];
    res.end(JSON.stringify(posts));
})
.listen(9090,()=>{
    console.log('启动成功');
});