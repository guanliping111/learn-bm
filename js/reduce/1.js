function reduce(arr, reduceCallback, initalVaule) {
    //initialValue: 可选。传递给函数的初始值，相当于total的初始值。
  //参数校验
  if(Array.isArray(arr) || !arr.length || typeof reduceCallback !== 'function') {
      return [];
  }else {
    //initialValue  0, 1
    //定义中间变量
    let hasInitialValue = initalVaule !== undefined;
    //分步法 定义变量
    let value = hasInitialValue ? initalVaule : arr[0]; //上一次执行的结果
    for (let i = hasInitialValue ? 0 : 1; i < arr.length; i++) {
        value = reduceCallback(value,arr[i], i, arr)
    }
    return value;
    //1. initialValue false 少执行一次
    
    //2. reduceCallback  怎么合并

  }
}

reduce([1,2,3], function(pre, cur, index, arr){
    return pre + cur; 
});
// [1,2,3].reduce
//Array.prototype.reduceFn