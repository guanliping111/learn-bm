## 手写Bind
怎么判断一个函数被new调用?
1.  new 返回的实例
let isNewCall = this instanceof test

2.  es6的api: target
let isNewCall = new.target === test