//客户端
const net = require('net');
class Xmlhttprequest {
    constructor() {
      this.method = null;
      this.url = null;
      this.headers = null;
      this.body = null;
    }
    open(method, url) {
      this.method = method;
      this.url = url;
    }
    setHeader(headers) {
      this.headers = headers;
    }
    send(body) {
      // 浏览 http 请求  -> 拼接 http 报文
      this.body = body;
      const client = net.createConnection({ port: 8088, host: '127.0.0.1' }, () => {
        client.write(`${this.method} ${this.url} HTTP/1.1\r\nHOST: 127.0.0.1\r\nContent-Type: application/json\r\nContent-Length: ${this.body.length}\r\n\r\n${this.body}\r\n`)
        client.end();
      })
      client.on('data', (chunk) => {
        console.log('receive:', chunk.toString());
      })
      client.on('end', () => {
        console.log('disconnect');
      })
    } 
}
const xhr = new Xmlhttprequest();
xhr.open("POST", "/");
xhr.setHeader({
    'Content-Type': 'application/json'
})
xhr.send(JSON.stringify({a: 1}));

// const client = net.createConnection({ port:8088, host: '127.0.0.1' }, () => {
//     let json = JSON.stringify({a: 1});
//     //建⽴了连接以后，浏览器就要发送HTTP的请求
//     //拼接报文
//     client.write('POST / HTTP/1.1\r\n'); //请求行
//     client.write('HOST: 127.0.0.1\r\n');//首部
//     client.write('Content-Type: application/json\r\n'); //首部
//     client.write('\r\n'); //\r\n
//     client.write(json);//实体
//     client.write('\r\n');
// })
// client.on('data', (data) => {
//     console.log('receive:', data.toString());
// })
// client.on('end', () => {
//     console.log('disconnect');
// })