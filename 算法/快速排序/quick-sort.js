function partition (nums, left, right) {
    if(left >= right) return;
    let i = left;
    let j = right;
    let provit = nums[left]
    while(left < right){
        // left right 互相换 
        // right 替换 left 位置
        // left  替换 right 位置

        // 左边为基准值
        // 1. 右边扫 找比基准值小的数 如果这个数比基准值大 一直往前走
        while(left < right && nums[right] >= provit) right--;
        nums[left] = nums[right];
        // 2. 左边扫
        while(left < right && nums[left] < provit) left ++
        nums[right] = nums[left]
    }
    nums[left] = provit;
    partition(nums, i , left - 1);
    partition(nums, left + 1, j);
}

const arr = [8, 9, 7, -1, 5, 0, 99, -4];
const quickSort = function (arr) {
    partition(arr, 0, arr.length - 1);
}
quickSort(arr);
console.log(arr);

// var sortArray = function(nums) {
//     partition(nums, 0, nums.length - 1)
//     return nums;
//   };