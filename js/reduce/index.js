var arr = [1,2,3,4];

//reduce total
// 一句话结果就出来了  arr.map filter ...
//1. 可读性 代码风格
// reduce 参数
var sum = arr.reduce(function(pre, cur, index, arr) {
    //pre 表示上一次调用回调时的返回值，或者初始值 init;
    console.log(pre, cur, index);
    return pre + cur;

},0)//初始值
    //如果没有提供initialValue，
    //reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。
    //如果提供initialValue，从索引0开始。
console.log(sum);
    // .map()
    // .filter() 链式调用
    