// 从面向对象聊到 继承 Object.create()
const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human?${this.isHuman}`); //My name is 巧鹅. Am I human?true
    }
}

//最简单的继承方案
// Object.create 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
//返回值 一个新对象，带着指定的原型对象和属性。
const a = Object.create(null);
a.name = '巧鹅';
a.isHuman = true;
// a.printIntroduction();
console.log(a.__proto__); //{ isHuman: false, printIntroduction: [Function: printIntroduction] }
console.log(a.__proto__ === Object.prototype); //false