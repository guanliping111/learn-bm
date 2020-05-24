/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    if (target > nums[right]) return right + 1;
    while (left < right) {
        var index = parseInt((left + right) >>> 1);//取左中位数
        if (nums[index] < target) left = index + 1; //中位数小于目标值，削去区间左侧
        else right = index; //中位数大于等于目标值，削去区间右侧
    }
    return left;
};