//回调 读文件
const fs = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');

fs.readFile('./1.js',(err,content) => {
    if(!err) {
        // console.log(content);
        fs.stat('./1.js', (err, stat) => {
            console.log(stat);
        })
    }
})
let readFilePromise = promisify(fs.readFile);
readFilePromise('./1.js').then(console.log)

let statFile = promisify(fs.stat);
statFile('./1.js').then(console.log);
// promisify 怎么实现的
function promisify1(fn) {
    return function(...args) {
        //promise 风格
        return new Promise((resolve, reject) => {
             fn(...args, (err, content) => {
                 if(!err) resolve(content);
             })
        })
    }
}


// 上面的回调用promise封装一下 包一层new Promise
let promisefyReadFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, (err,content) => {
            if(!err) {
                resolve(content);
            }
        })
    })
}