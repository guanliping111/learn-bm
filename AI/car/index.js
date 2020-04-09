var fs = require('fs'); // node file system node 自己的模块
var path = require('path'); //引入路径模块
// uuid npm 第三方
// fs.readFile('aa.txt', function(err, data) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.toString());
// })

function getDirFiles(startPath) {
    //子目录 孙目录 递归目录
    //递归 
    // 1. 一个大问题 分解成很多个相同的小问题
    // 2. 退出条件 目录下没有子目录了
    let result = [];

    // process 是node的全局变量 表示进程
//    console.log(path.join(
//          process.cwd(), startPath
//        ), '------');
    //1.读取所有文件？
    // let files = fs.readdirSync(//读目录
    //     path.join(//连接
    //     process.cwd(), startPath
    //    )
    // );
    // //console.log(files);
    // for (let file of files) {//读取每一个文件
    //     // console.log(file);
    //     let stats = fs.statSync(
    //         path.join(process.cwd(), startPath, file)//读取物理路径
    //       );
    //       if (stats.isFile()) {
    //         result.push(file)
    //       }
    //       if (stats.isDirectory()) {
      
    //       }
    //     //console.log(stars);
    // }

     // 递归
    function finder(parentPath) {
        // console.log(path);
        let files = fs.readdirSync(parentPath);
        if (!files.length) return;
        // console.log(files);
        files.forEach(function (val, index) {
        // console.log(val, index);
        // 目录还是文件
        let fPath = path.join(parentPath, val);
        // console.log(fPath);
        let stats = fs.statSync(fPath);
        if (stats.isDirectory()) {
            finder(fPath);
        }
        if (stats.isFile()) {
            result.push(fPath);
        }
        })
    }
    finder(
        path.join(process.cwd(), startPath)
    );
    return result;

}
console.log(getDirFiles('src'));
