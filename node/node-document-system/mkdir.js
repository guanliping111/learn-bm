var fs = require("fs");
// workspace 目录必须存在
console.log("创建目录 /workspace/test/");
fs.mkdir("/workspace/test/",function(err){
   if (err) {
       return console.error(err);
   }
   console.log("目录创建成功。");
});
// fs.mkdir('/workspace/a/apple', { recursive: true }, (err) => {
//     if (err) throw err;
//   });

//读取目录
console.log("查看 /workspace 目录");
fs.readdir("/workspace/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
       console.log( file );
   });
});