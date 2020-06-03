/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
      const mid = low + ((high - low) >> 1);
      if (nums[mid] === target) return mid;
      if (nums[mid] >= nums[low]) {
        if (target >= nums[low] && target <= nums[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else {
        if (target >= nums[mid] && target <= nums[high]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
    }
    return -1;
  
      // let low = 0;
      // let high = nums.length - 1;
      // while(low < high){
      //     let mid = (low+high)>>1;
      //     if( (nums[0] > nums[mid]) ^ (target > nums[mid]) ^ (target < nums[0]) ) {
      //         low = mid+1;
      //     }
      //     else{
      //         high = mid;
      //     }
      // }
      // return low == high && nums[low] == target ? low : -1;
  
  }
  