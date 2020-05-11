const http = require('http');
// Web 编程的基石 http 协议
http.createServer((req,res) => {
    //req: 访问者浏览器访问
    // res: 服务器返回数据
    if(req.url === '/') {
        res.writeHead(200,{'Content-Type':'text/html;chartset=utf8'});
        res.end("首页");
    }else if(req.url === 'about') {
        res.end('about');
    }
    res.end('Hello World')
})
.listen(1314)