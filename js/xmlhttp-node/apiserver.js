//启动一个服务器 封装一个ajax
const http = require('http');
const fs = require('fs');
const server = http.createServer(function(req,res){//req 请求对象
    // https://www.baidu.com/   => /
    // https://www.baidu.com/s?wd=sw    => /s
    //GET 把参数放到 请求行内的url 里面
    //POST 把参数放到实体里面
    if(req.url === '/') {//  '/'根路径 首页
        //html
        // const html = fs.readFileSync('./index.html','utf8');//读文件同步
        // res.end(html);
        //后端返回的内容的类型
        //http 状态码 
        //1xx
        //2xx:200 成功
        //3xx: 301/302 重定向
        //4xx: 客户端  401 未授权 404 
        //5xx: 服务端 500 服务的出错
        res.writeHead(200, {
            'Content-Type': 'text/html'
          })
          res.end(`<h2>123</h2>`)
    }else if(req.url === '/getPost') {
        //没有数据返回
        let posts = [
            { title: 'js',star: 1000 },
            { title: 'php',star: 2000 },
        ]
    let str = '';
    // 分段得到
    // 我们去向  => douban.com 要数据， douban.com 给我 response
    // 前端 xhr.send()   =>  我们， 接受 前端 req
    req.on('data', function(chunk) {
        str += chunk;
      })
      // 接受完毕 str 组装完成
      // json
      req.on('end', function() {
        // 80%
        // Content-Type', 'application/json
        console.log(JSON.parse(str));
      })
        res.end(JSON.stringify(posts));//end 方法只能返回字符串 JSON
        //前端提交数据解析
    }
    // console.log(req.url);
    // res.end('hello server');
})
server.listen(8080, function(){
    console.log('server is running 8080');
}) 