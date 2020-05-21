## 2020-5-21
## es6 入门
    https://es6.ruanyifeng.com/#docs/promise
### Promise 
  - 一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
  - Promise 是一个对象，从它可以获取异步操作的消息。
### asynca/wait
 - async 是“异步”的简写，而 await 可以认为是 async wait 的简写。
   async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。
 - async function 用来定义一个返回 AsyncFunction 对象的异步函数.
   异步函数是指通过事件循环异步执行的函数，它会通过一个隐式的 Promise 返回其结果。
 -  async/await是基于Promise实现的，它不能用于普通的回调函数。 
    async/await与Promise一样，是非阻塞的。 async 是“异步”的简写，而 await 可以认为是 async wait 的简写。
    所以应该很好理解 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。
###  Promise.resolve
  - Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。
  - 如果这个值是一个 promise ，那么将返回这个 promise ；
  - 如果这个值是thenable（即带有"then" 方法），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；
  - 否则返回的promise将以此值完成。此函数将类promise对象的多层嵌套展平。
   