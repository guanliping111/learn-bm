## new 运算符
   new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例
1. 创建一个空的简单JavaScript对象（即{}）；
2. 链接该对象（即设置该对象的构造函数）到另一个对象 ；
3. 将步骤1新创建的对象作为this的上下文 ；
4. 如果该函数没有返回对象，则返回this。

- 每个函数 function Foo() {}
  都有 一个 属性 prototype = { constuctor: Foo }
  prototype.__proto__ = Object.prototype


- 模拟 new 的行为
1. 创建一个 继承自 构造函数.prototype 的对象
2. 这个对象 作为构造函数运行时的 this, 完成自身属性的添加
3. new 结果：
   - 如果构造函数返回一个对象了，new 结果就是这个对象
   - 如果构造函数没有返回一个对象了，new 结果就是我们刚才创建的这个对象