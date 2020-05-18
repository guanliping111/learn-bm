const express = require('express');
const data = require('./db.json');
// koa 是 express 的小孩子
const app = express();
app.get('/', function(req,res) {
    res.json(data);
})

//设计一个URL 访问第一首诗
//restful url
 app.get('/posts/:id', function(req, res) {
    //console.log(req.params.id);
    let id = req.params.id
    let post = data.posts.filter(post => post.id == id);
    res.json(post);
    //res.json(post[0].content); //只获取内容
 })
//添加一篇新的文章 设计url
//app.post("/posts", )
app.listen(8081);