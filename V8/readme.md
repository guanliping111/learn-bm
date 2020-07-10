## 2020-5-25
 
 1. v8引擎
   v8引擎是执行js代码的程序或解释器。
## JavaScript 变量提升
 https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting
- 变量提升（Hoisting）被认为是， Javascript中执行上下文 （特别是创建和执行阶段）工作方式的一种认识。
- JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
- JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。
- 变量可以在声明之前进行初始化和使用。但是如果没有初始化，就不能使用它们。、
- 只有声明被提升
  JavaScript 仅提升声明，而不提升初始化。如果你先使用的变量，再声明并初始化它，变量的值将是 undefined。

  - let  var
   1. let允许你声明一个作用域被限制在 块级中的变量、语句或者表达式。
   2. let不会在全局声明时（在最顶部的范围）创建window 对象的属性  编译时才初始化
   3. var声明的变量只能是全局或者整个函数块的
  - let 的暂存死区
    与通过  var 声明的有初始化值 undefined 的变量不同，
    通过 let 声明的变量直到它们的定义被执行时才初始化。
    在变量初始化前访问该变量会导致 ReferenceError。
    该变量处在一个自块顶部到初始化处理的“暂存死区”中。

    JavaScript 仅提升声明，而不提升初始化。
    如果你先使用的变量，再声明并初始化它，变量的值将是 undefined。

    ```js
      function do_something() {
      console.log(bar); // undefined
      console.log(foo); // ReferenceError
      var bar = 1;
      let foo = 2;  
      }

    ```
   