var http = require('http');


// http 协议，  1991 html 应答
http.createServer((req, res) => {
  if (req.url == '/newpage') {
      res.writeHead(204); // a 不跳转
    return ;
  }
  // http  头， 体
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  // 七层模型 物理层  数据链路层   IP层  TCP层  应用层(...)
  res.write('hello world');
  res.end(`
    <html>
      <head></head>
      <body>
        <a href="/newpage">去新的页面</a>
      </body>
    </html>
  `)
})
.listen(3000)