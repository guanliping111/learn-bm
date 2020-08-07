//所有 import 的依赖(all imports)都编译到dist.js文件中
'use strict';

const add = (a,b) => a + b;

console.log(add(1,2));
//tree-sharking: min 没有打包 
//安装包： cnpm i rollup -S
