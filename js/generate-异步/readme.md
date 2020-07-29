## ES6 Generator 函数
- Generator 函数是一个普通函数，
有两个特征。
1. function关键字与函数名之间有一个星号
2. 函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。

  - 每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。
    value：表示当前的内部状态的值，是yield表达式后面那个表达式的值；
    done：是一个布尔值，表示是否遍历结束。 false 未结束 true 已完成

