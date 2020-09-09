## 滴滴面试复盘

- css考什么
    display block/inline/inline-block/table/table-cell
    grid/flex/none
    BFC 闭包
    position 居中
    transform
    伪元素
    BEM
    padding-top 做法


- css 正方形
    难点:不定宽 如何让高跟着变
    - planA
    1. vw/vh 最好的适配方案
    2. 50% padding-top 
    3. rem
    4. 伪元素

- **响应式编程**的核心是什么？ 
    data-binding 数据绑定 => 数据和模板的绑定  
    { a:1, b:2 } 发布者 1：n  template {a} 订阅者

    get set
    css
    react/vue 响应式
    - 设计模式 订阅发布者模式
    - Object.defineProperty  vue2.0
        ES6的 Proxy
        Object.observer
- MVVM 手写
    1. Object.definePropety 为什么不用它了？
        数据劫持API  vue2.0中如何
        set
    2. 订阅发布者模式
        实列化 一个订阅者
        更新 this.innerHTML
    3. 模板编译

- diff算法

- 面试准备
  牛客网刷题
  MVVM手写 ES6 API + 订阅发布者模式 diff算法
  数据结构(栈  队列) + 动态规划

## definePropety  Proxy 
- ES5 提供了 Object.defineProperty 方法，该方法可以在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。
- 使用 defineProperty 只能重定义属性的读取（get）和设置（set）行为，到了 ES6，提供了 Proxy，可以重定义更多的行为，比如 in、delete、函数调用等更多行为。
Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例
