## 装饰者模式-前端中的AOP
### AOP:Aspect Oriented Programming 面向切面编程
主要功能:日志记录，性能统计，安全控制，事务处理，异常处理等等wn及扩展

### Javascript 中的装饰器
- 原因：
    ES6 提出之后， ES6 中增加了对类对象的相关定义和操作(比如 class 和 extends ), 当我们需要在多个不同的类之间共享或者扩展一些方法或行为的时候，代码会变得错综复杂，极其不优雅。

- 装饰类
给类添加一个属性，会调用Object.defineProperty 
它有三个参数：target 、name 和 descriptor
- 装饰属性
装饰器在作用于属性的时候，实际上是通过 Object.defineProperty 来进行扩展和封装的。

装饰器允许你在类和方法定义的时候去注释或者修改它。
装饰器是一个作用于函数的表达式，它接收三个参数 target、 name 和 descriptor ， 然后可选性的返回被装饰之后的 descriptor 对象。
如果要用装饰器的话，需要使用 Babel 进行转码
安装插件：@babel/plugin-proposal-decorators


https://aotu.io/notes/2016/10/24/decorator/index.html