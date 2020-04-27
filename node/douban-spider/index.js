/**
 * @date 2020-4-27
 */

const https = require('https');
const cheerio = require('cheerio');
//请求top250
https.get('https://movie.douban.com/top250', function(res) {
    console.log(res);//结果 分段返回 需自己拼接
    let html = '';
    //有数据返回时 获取
    res.on('data', function(chunk) {
        html += chunk;//html = html + chunk  chunk就是接收到的数据
    })
    //所有数据完成时 返回
    res.on('end', function() {
        console.log(html);
        const $ = cheerio.load(html);
        //在html 页面中 的写法
        // document.querySelectorAll('.grid_view li').forEach(function(linode) {
        //     const title = linode.querySelector('.title')
        //     console.log(title.innerHTML)
         //   })
         let allFiles = [];
        $('li .item').each(function() {//li 下面是item           
        //this 循环时当前的电影
        // this.querySelector 
        //获取数据
        const title = $('.title',this).text();
        const star = $('.rating_num',this).text();
        const pic = $('.pic img',this).attr('src');
        //console.log(title,star,pic);
        //存数据库 存在json文件中 fs
        allFiles.push({
            
        })
        })
    })
})