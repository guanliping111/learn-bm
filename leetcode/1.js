//let a = 1;//全局
// var twoSum;//声明变量
// console.log(typeof twoSum);//undefined
// twoSum = 1;
// console.log(typeof twoSum);

//时间复杂度 O(n^2)
//方法一 暴力解法
// var twoSum = function(nums,target){
//     let arr = [];
//     for(let i=0; i < nums.length; i ++) {//暴力解法
//         //循环一编
//         for (let j = i + 1; j < nums.length; j ++){//内层循环
//             if(nums[i] + nums[j] === target){
//                 arr = [i,j];
//                 return arr;
//             }
//         }
//     }
//     // console.log(a);
//     // let a = 1;
// }
// console.log(typeof twoSum);
// twoSum();



// 方法二：O(n^2) -> O(n)
const twoSum = function() {
    //两重循环
    //target,一重循环，nums[i] , target-nums[i]
    let map = {};//对象自面量
    nums.forEach(function(e,i){//foreach 遍历数组里面的每个数 i为下标，e为值
        //console.log(e,i);
        map[e] = i;//找出每个数值e的下标 i “2”：0;
    })
    for (let i = 0; i < nums.length; i++) {
        let j = map[target - nums[i]];
        if (j && j !== i) {
            return [i,j];
        }
    }
};
console.log(twoSum = ([2,7,11,15],9));
//时间复杂度 n + n = 2n O(n)
