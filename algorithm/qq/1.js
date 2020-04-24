//类型 
//1.number 数值型 ，整数 浮点数没有区分
//2.字符串类型
let arr = [ ];
let nums = '631758924';
//console.log(typeof nums);
let c = nums[1];//提取第二个字符
nums = nums.substring(1);//截取字符串 或者str.slice 
arr.push(nums[0]);
nums += c;
console.log(nums,arr);
//1.第一位删除
// 2.第二位放到最后面
