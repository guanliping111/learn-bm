## 2020-5-22
- es6
1. ES5声明变量只有两种方式：var和function。
2. ES6有let、const、import、class再加上ES5的var、function共有六种声明变量的方式。
3. 还需要了解顶层对象：浏览器环境中顶层对象是window，Node中是global对象。
4. ES5中，顶层对象的属性等价于全局变量。(敲黑板了啊)
5. ES6中，有所改变：var、function声明的全局变量，依然是顶层对象的属性；
   let、const、class声明的全局变量不属于顶层对象的属性，
   也就是说ES6开始，全局变量和顶层对象的属性开始分离、脱钩。


- window.navigator.userAgen  用户代理
  判断是浏览器环境是Android还是ios设备
  返回当前浏览器的用户代理（user agent）字符串，
  userAgent 属性是一个只读的字符串，声明了浏览器用于 HTTP 请求的用户代理头的值。
 
 - 为什么 chrome userAgent Mozilla Safari 这些东西?
  浏览器的历史
   - 1989
   - 1990 第一款浏览器
   - 1993  NSCA Mosaic可以同时展示文字和图片了 支持不同类型的图片
    不支持iframe
   - 1994 Netscape，也就是网景  Mozilla
    支持iframe 嵌 入
   - 1995 IE   Windows95
