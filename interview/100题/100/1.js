//函数即对象
//构造函数
function Foo(){
    Foo.a = function() {
        console.log(1);
    }
    //new过程 自己的属性
    this.a = function() {
        console.log(2);
    }
}
//原型链
Foo.prototype.a = function() {
    console.log(3);
}
//属性覆盖
Foo.a = function() {
    console.log(4);
}
Foo.a();//4
//new 的源码实现 ？
let obj = new Foo();//构造函数 作为this的上下文
obj.a();//2  如果该函数没有返回对象，则返回this。
Foo.a();//1
