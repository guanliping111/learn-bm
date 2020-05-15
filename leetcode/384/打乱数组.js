/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.arr = nums;
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
   return this.arr;
}; 

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
   //let nums = [...this.arr];
   //浅拷贝一下 slice
   let nums = this.arr.slice();
   let len = nums.length;
   for( i = 0; i < len; i++){
       let idx = Math.floor(Math.random() * (len - i));
       [nums[len - 1 - i], nums[idx]] = [nums[idx], nums[len - 1 - i]];
   }
   return nums;

   // let nums = this.arr.slice();
   // let len = nums.length;
   // for(let i = 0; i < len; i++){
   //     let idx = Math.floor((i+1)* Math.random());
   //     [nums[idx],nums[i]] = [nums[i],nums[idx]]
       
   // }
   // return nums;

};

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/