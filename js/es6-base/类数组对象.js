/**
 * @date 2020-4-23
 */
//类似数组的对象
//1.可以像数组一样，用数组[i]取值
//2.length
//arguments，

let arr = [1,2,3]
arr.forEach(function (num) {
    
})
function sum(){
    //参数的个数不确定有几个
    let sum = 0;
    //console.log(arguments[0],arguments)

    //1.Array.prototype.forEach
    Array.prototype.forEach.call(arguments,function(num) {//借用
        console.log(num);
        
    })

    //2.Array.from
    const arr = Array.from(arguments);
    arr.forEach(function(num) {
        console.log(num);
    })

}
sum(0,1,3,4);
