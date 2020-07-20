const express = require('express')

const app = express()
// Get 路由
app.get('/big.js',(req, res)=>{
    console.log('here');
    const fs = require('fs')
    const jsContent = fs.readFileSync('./big.js', 'utf-8');
    //Content-Type 
    //强缓存 (Cache-Control)：200 请求不会到达服务器 表示资源的缓存时间。
    res.setHeader('Cache-Control', 'max-age=20');

    //协商缓存 请求会到达服务器
    //20s之后 请求(会携带一个 If-None-Match的字段) 到达服务器
    //If-None-Match: 浏览器发现 上一次请求 服务器有Etag设置 浏览器自动发送一个
    //Etag生成：MD5 被请求变量的实体值
    //if-modified-since: 文件修改了文件的最后修改会发生变化
    //服务器 对比前后；两次文件有没有发生变化 从时间考虑 
    const Etag = md5(jsContent);
    const oldEtag = req.headers['If-None-Match'];
    if(Etag === oldEtag) {
        //文件没有变
        //服务器检查该ETag，并判断出该页面自上次客户端请求之后还未被修改，直接返回响应304
        //从缓存里面读取304 (未修改——Not Modified)
        res.sendStatus(304).end('');
        return ;
    }
    res.setHeader('Etag','abcdefg');
    res.end(jsContent)
})

app.listen(9090, ()=> {
    console.log('在9090端口启动成功')
})
