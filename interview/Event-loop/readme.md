1. setTimeout
2. Promise
3. 请求
4. addevent
5. 页面

浏览器内部有很多线程
1. 定时器触发线程 
2. http
3. GUI线程

## Event-loop 事件循环
什么是Event-loop:
    浏览器协调用户交互，渲染，网络等任务
```js
    setTimeout(() => {
        console.log(1);
    }, 0)
    Promise.resolve(3).then(console.log);
    console.log(2);//2 3 1
```
- macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
- micro-task(微任务)：Promise，process.nextTick

### 宏任务: 由宿主环境引起的任务
setTimeout
整体的一段script

- 渲染事件(如解析DOM、 计算布局、绘制) ;
    用户交互事件(如鼠标点击、滚动页面、放大缩小等) ;
    JavaScript脚本执行事件; ( setTimeout)
    网络请求完成、文件读写完成事件。
    主线程采用一个for循环，不断地从这些任务队列中取出任务并执行任务。
    我们把这些消息队列中的任务称为宏任务。
### 微任务: 由js本身引起的任务
    基于微任务的技术有MutationObserver、 Promise 以及以Promise 为基础开发出来的很多其他的技术。
    Process . nextTick(node端)
    微任务就是一个 需要异步执行的函数，执行时机是在主函数执行结束之后、当前宏任务结束之前。
    微任务可以在实时性和效率之间做一个有效的权衡。

## 流程
只要宏任务队列 不为空：
1. 从宏任务队列里面取出 **一个** 执行
2.  从微任务队列里面取出 **所有的** 执行，
如果在这个执行过程中又产生了微任务，再次循环第2步
3. 有可能进入浏览器的更新渲染
    1. reqAnimationframe 回调
    2. 执行 IntersectionObserver 回调
    3. 重新绘制渲染

以60fps 每一帧花费 16.6666ms
我们的渲染是:
一个宏任务 -> 清空微任务 -> 渲染 -> 一个宏任务 -> 清空微任务 -> 渲染