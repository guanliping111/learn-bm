//4-15
const ages = [32,15,19,12];
// const nums = [];
// for(let age of ages) {
//     if (age >= 18) {
//         nums.push(age);
//     }
// }
// console.log(nums);
//es6数组新写法    在数组中过滤你想要的或者不想要的东西 
// 计数 for 机器化
// 表述性好一些 forEach 函数式编程 提升代码的可读性 后面将深入学习
//比较优雅的写法 
//es6 让代码更优雅
//array 语义化的啊方法，代语义化
//ages 数组  filter 语义化的过滤功能码可读性提升，如array.filter
const adultArr = ages.filter( age => age >= 18);//[32,19]  es6的新写法
    
    //onst adultPresent = ages.filter(function(age,index, o){
        //console.log(age, index, o);
       // return age >= 18;
    //});
    //console.log(adultPresent);

const adultPresent = ages.some(age => age >= 50);//有一个那满足需求
//console.log(adultPresent);
const allOldEnough = ages.every(age => age >= 50);//数组里面每一项都满足需求
console.log(allOldEnough);