//采用双指针法，
//初始时 i=0，j=1，然后移动 j ，
//判断nums[i] == nums[j] ，
//如果 nums[i] 不等于 nums[j] 
//则把 nums[j] 的值赋给 i 的的下一位，然后 i 自增1
var removeDuplicates = function(nums) {
    let i = 0;
    len = nums.length;
    for (let j = 1; j < len; j++) {
        if (nums[i] != nums[j])
            nums[++i] = nums[j];
    }
    return i+1;

    // let len = nums.length;
    // for(let i=1; i<len; ) {
    //     if(nums.slice(0,i).indexOf(nums[i]) !== -1){//重复项
    //         nums.splice(i,1);//删除该项
    //         len--;
    //     }
    //     else i++;
    // }
    // return len;
}; 