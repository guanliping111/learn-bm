//装饰属性
let obj = {}
Object.defineProperty(obj, 'a', { 
    value: 1 //descriptor
});
//日志 log
function log(target, key, descriptor) {
    let originAdd = descriptor.value;
    //修改 descriptor.value 函数
    descriptor.value = function(...args) {
        //开始监听
        console.log('start');
        let res = originAdd.apply(this, args);//恢复原来的行为
        return res;
    }
    return descriptor;
}

class Math {
    constructor() {
        this.c = 10;
    }
    //无侵入
    //add 有参数怎么办 有this怎么办
    @log  //target
    add(a, b) { //key
        const sum = a + b + this.c;
        return sum;
    }
}
let m = new Math();
//add 不是原来的 add
// add 修饰过后的add === descript.value
console.log(m.add.toString());
m.add();
//监听一下add方法有没有被调用
