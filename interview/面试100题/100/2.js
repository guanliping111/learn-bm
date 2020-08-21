//函数和构造函数 即统一又要分离
const Person = function(name) {//风格
    this.name = name;
    // return 1; 写不写 无影响
    return {
        name: 'Json'
    }
    //这时 return 一个新的对象：函数return的优先级 大于new的函数优先级
}

Person.prototype.sayName = function() {
    console.log(this.name);
}

const person = new Person('Tony');
console.log(person.name); //Tony  Json
console.log(person.sayName); // [Function] undefined
console.log(person instanceof Person); //true false
