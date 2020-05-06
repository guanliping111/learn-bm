/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //动态规划  对数组进行遍历  求最大子序和
    //如果 sum > 0，则说明 sum 对结果有增益效果，则 sum 保留并加上当前遍历数字
    //如果 sum <= 0，则说明 sum 对结果无增益效果，需要舍弃，则 sum 直接更新为当前遍历数字
    //每次比较 sum 和 ans的大小，将最大值置为ans，遍历结束返回结果

    // let max = nums[0];
    // let sum = 0;
    // for(let num of nums) {
    //     if(sum > 0) {
    //         sum += num;//sum = sum + num;
    //     }
    //     else{
    //         sum = num;
    //     }
    //     max = Math.max(sum,max);
    // }
    // return max;

    //优化后
    var max = Number.MIN_SAFE_INTEGER;//js中最小的安全的integer型数字 (-(253 - 1)).
    var prev = 0;
    for(var i = 0; i < nums.length; i++) {
        prev = Math.max(prev+nums[i],nums[i])
        max = Math.max(max,prev);
    }
    return max;

};