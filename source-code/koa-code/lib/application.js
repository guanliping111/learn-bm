const http = require('http');
class MyKoa {
    constructor(){
        // super();
        this.body = null;
    }
    // es6 写法 接收多个参数
    listen(...args){
        console.log(...args);
        let server = http.createServer((req,res)=>{
            res.end('hello world');
        });
        server.listen(...args);
    }
    use(fn){
        this.fn = fn;
    }
}

module.exports = MyKoa;