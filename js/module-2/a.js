import { add, min, bar } from './math.js';


//bar 和math.js 引用的关系
console.log(add(1,2));
console.log(bar);
setTimeout(() => {
    console.log(bar);
},5000)
//tree-sharking: min 没有打包 
//安装包： cnpm i rollup -S
//js: 1.没有模块化 普通的脚本文件
//      2. module 一个模块