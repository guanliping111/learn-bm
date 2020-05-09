//轻量级的web 开发框架 js node 
const fs = require('fs');
const Koa = require('koa');
const app = new Koa();// web server
//启动一个服务  函数封装一个服务
// const func = ctx => {//访问功能
//     console.log(func);
//     ctx.response.body = 'func';
// }
const main = ctx => {
     console.log(ctx.request,'--------');
    // ctx.response.body = 'hello world';
    ctx.response.type = 'html';//返回的文件类型
    const html = fs.readFileSync('./template.html','utf-8');//读取文件
    // fs.readFile('./template.html','utf-8', function(err,date) {
    //     console.log(date);
    //     ctx.response.body = date;
    // });
    //console.log(html);
    ctx.response.body = html;//发送文件
}
//app.use(func);
app .use(main);//启动了一个服务 给访问者 request用
app.listen(3000);