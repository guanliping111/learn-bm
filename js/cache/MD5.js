// 散列 / 哈希 MD5 加密
const md5 = require('md5');

//同样的输入同样的输出
console.log(md5('abc'))
console.log(md5('abcdkhj'))
//如果两次的MD5的结果一样  =>  说明 两次原始未加密内容也是一样的
//两次md5(big.js) 对比一下
//协商：缓存 新的内容
//服务器判断 是否可以缓存 要先知道内容有没有发生变化
