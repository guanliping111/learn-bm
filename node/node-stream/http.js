const https = require('https');
const fs = require('fs');
https.get('https://movie.douban.com/top250', function(res) {
  //console.log(res);//继承了 res 流  可读流 提供数据那一方

  //拿到数据 保存在 本地douban.html文件里面
  const writeStream = fs.createWriteStream('./douban.html');
  res.pipe(writeStream);
  
});