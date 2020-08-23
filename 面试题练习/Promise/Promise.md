## 学习Promise基础及手写Promise

### 什么是Promise

> 所谓`Promise`，就是里面保存着某个未来才会结束的事情的**结果**的一个**容器**。`Promise`是一个对象，从它可以获取异步操作的消息。因为`Promise`一般是一个异步操作。

- Promise是ES6引入的新特性，旨在解决回调地狱。

- Promise对象有以下两个特点：

1. 对象的状态不受外界影响。

   `Promise`对象代表一个异步操作，有三种状态：

   - `pending`(进行中)
   - `fulfilled`(已成功)
   - `rejected`(已失败)

   只有异步操作的结果可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。

2. 一旦状态改变，就不会再改变，任何时候都可以得到这个结果。

   `Promise`对象的状态改变，只要两种可能：

   - pending  ->  fulfilled
   - pending  ->  rejected

- 优点：有了`Promise`对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数

- `Promise`的基本用法

  语法：new Promise( function(resolve, reject) {...} /* executor */  );

```javascript
new MyPromise((resolve, reject) => {//同步
    resolve(1); //如果这里是异步setTimeout 只会拿到value为undefined
})
.then((res) => {//异步
   console.log(res); //1
}, () => {})//这是then的第二个参数，一般不用可不加
```

`Promise`构造函数接受一个函数作为参数，函数的参数为`resolve`,`reject`，这里我写的是箭头函数，函数名省略。

这两个参数也是函数由JavaScript引擎提供。

- `resolve`函数的作用：将`Promise`对象的状态从“未完成”到“成功” (`pending`  ->  `resolved`)，异步成功时调用，并将异步的结果，作为参数传递出去。

- `reject`函数的作用：将`Promise`对象的状态从“未完成”到“失败” (`pending`  ->  `rejected`)，异步失败时调用，并将异步报出的错误，作为参数传递出去。

### then()方法

> Promise.prototype.then()：
>
>  `then() `方法返回一个 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/API/Promise)。它最多需要有两个参数：Promise 的成功(`onFulfilled`接受)和失败(`onRejected`拒绝)情况的回调函数。

`then`方法的第一个参数是`resolved`状态的回调函数，第二个参数（可选）`是rejected`状态的回调函数。

**then方法返回一个新的Promise** ，而不是返回this

提前预热：理解一下同步和异步的`Promise`的实现过程

```javascript
function Promise(fn) {
   function resolve(a) {
      console.log(a);
   }
   fn(resolve)
}
Promise((resolve) => {
   resolve(3333)
})
```

### 手写Promise

#### 实现同步的Promise

实现的思想：

1. 构造一个函数的实例 MyPromise，

2.  构造函数MyPromise传入的参数，也是构造函数fn,

3.  fn里面依然是接收两个函数 resolve,reject 就把它们定义在外面

4.  resolve构造函数里面 拿到正确的信息， resolve的值vlaue只能在内部拿到

5.  then 把resolve成功的结果, 放到 onFulfilled()里面

```javascript
//同步的Promise
function MyPromise(fn)	{
    this.value = undefined;
    let self = this; //self永远指向this
    function resolve(value) { //拿到正确的信息
        self.value = value;
        console.log(value);
    }
    function reject() {} //拿到错误的信息
    fn(resolve, reject);  //回调 立即调用 拿到值
}
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled(this.value); //resolve的结果
}

//测试
new MyPromise((resolve, reject) => {
    reslove(1);
})
.then((res) => {
    console.log(res);
},() => {})
```

#### 实现异步的Promise

如果在上面同步的测试代码中放一个`  setTimeout `就拿不到`resolve`的值，会输出`undefined`，因为并没有被立即调用。因此要实现 状态变为成功的时候，就可以拿到值再调用。因此在同步的基础上写一个异步的`promise`版本，需要加三个状态`pending`、 `fulfilled` 、`rejected`来更改状态。

```javascript
//异步的Promise 36分钟
//初始化状态 并且是唯一值
const PENDING = Symbol('PENDING');
const FULFILLED = Symbol('FULFILLED');
const REJECTED = Symbol('REJECTED');
function MyPromise(fn)	{
    this.value = undefined;
    this.status = PENDING;//默认状态 PENDING
    let self = this; 
    function resolve(value) { 
        self.value = value;
        self.status = FULFILLED;
        console.log(value);
        self.onFulfilled(value);
    }
    function reject() {} //拿到错误的信息
    fn(resolve, reject);  //回调 立即调用 拿到值
}
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    if(this.status === FULFILLED) {
        onFulfilled(this.value);
    }
    else if(this.status === PENDING) {
        this.onFulfilled = onFulfilled;
    }
    else{}
}

//测试
new MyPromise((resolve, reject) => {
    setTimeout(() => {
            resolve(1); //如果这里是异步setTimeout 只会拿到value为undefined
    },2000)
})
.then((res) => {
    console.log(res);
 },() => {})
```



### 用Promise对象实现的 Ajax





### 参考文档

史上最易读懂的 Promise/A+ 完全实现:https://zhuanlan.zhihu.com/p/21834559

ES6:https://es6.ruanyifeng.com/#docs/promise

