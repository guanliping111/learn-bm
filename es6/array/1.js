const ages = [32,15,19,12];
// const nums = [];
// for(let age of ages) {
//     if (age >= 18) {
//         nums.push(age);
//     }
// }
// console.log(nums);
//ages 数组  filter 过滤   array.filter
// 计数 for 机器化
// forEach 函数式编程  
const adultArr = ages.filter( age => age >= 18);
    //console.log(age, index, o);
const adultPresent = ages.some(age => age >= 50);
//console.log(adultPresent);
const allOldEnough = ages.every(age => age >= 50);
console.log(allOldEnough);