//  async/await
const fs = require('fs');
//promise 是把每个回调进行拆分再用then链式解决
//3个异步任务
//Promise 对回调 封装，封装出了 then 这种 api
const promise1 = new Promise((resolve,reject) => {
    fs.readFile('./package.json',(err,info) => {
        resolve(info)
    })
})
const promise2 = (info) => {
    new Promise((resolve,reject) => {
        fs.writeFile('./p.json', info,(err) => {
            if(!err) {
                resolve();
            }else{
                reject();
            }
        })
    })
}
const promise3 = (time) => {
    new Promise((resolve,reject) => {
        fs.writeFile('./p.json', info,(err) => {
            setTimeout(() => {
                resolve();
            },time)
        })
    })
}
//then 链式调用
promise1.then((info) => {
    //返回promise
    return  promise2(info);
})
.then(() => {
    //等着前面那个promise
    console.log('读写完成');
    return promise3(3000);
})
.then(() => {
    console.log('ok');
})
 
async function run () {
    //await(等待)  接一个promise 后面代码会等着  Promise  resolve 才会执行
    //async + await 取代了.then
    let info = await promise1
    await promise2(info);
    await promise3(2000);
    console.log('OK');
}
run();

// 同步的
// let a = 1 + 1;
// let b = a + 3;
// let c = b + 4;

// fs.readFile('./package.json', (err, info) => {
//   resolve(info);
// })
// 异步的顺序，保证异步顺序 怎么办？？？
// 1：原始写法：回调函数嵌套在一起，可能形成回调地狱
fs.readFile('./package.json', (err, info) => {
    // 读完
    // 在写
    fs.writeFile('./p.json', info, (err) => {
      if (!err) {
        setTimeout(() => {
          console.log('ok');
          // 嵌套
        }, 2000)
      }
    })
  })
  // 回调  ->  promise 只是  以 then 这个 api，保证了 异步任务的顺序
  // XmlHttqrequest ->  axios
  