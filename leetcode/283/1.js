/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let i = nums.length-1;
    while(i>=0){
        if( nums[i] === 0){
            nums.splice(i,1)//从数组中添加/删除项目，然后返回被删除的项目。
            nums.push(0)
        }
        i--
    }
    return nums;

    
    //双指针法 
    //1、维护一个总是指向0的动态指针 i
    //2、每次遇到非0位置的数将其位置的数与0位置指针索引上的数进行交换值并更新1的指针i++
    //2处交换 一处总为0 所以直接赋值为0 不用存储临时变量 但如此就需要判断 i 是否等于 j 去掉为自己的情况
    // let i = 0, j=0
    // while(i < nums.length){
    //     if (nums[i] != 0){
    //         if (j < i){
    //             nums[j] = nums[i]
    //             nums[i] = 0
    //         }
    //         j++
    //     }
    //     i++
    // }
    // return nums;

    
};