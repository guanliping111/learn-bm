## commonJS
  1. common.js 一定要代码运行起来才知道引入了哪些模块
  2. 可以出现在逻辑分支里面
导出： module.exports = function() {}
导入：require  
      var React = require('react');

## es-module
   1. import/export 不论你写在哪，都会提前执行
   2. 在代码静态分析(不用执行代码)， 就可以分析出你引入了哪些模块
```js
    // ES6的写法
    import React from 'react';

    class Breadcrumbs extends React.Component {
        render() {
            return <nav />;
        }
    };

    export default Breadcrumbs;
```
 AMD
 CMD
 UMD:统一模块化方案
 ```js
    (function() {
        //判断代码最终执行的环境到底是 node 还是浏览器
    })()
 ```
 CJS
 ES
