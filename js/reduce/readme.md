## 消消乐
 - 应用
 - 手写reduce
   如果没有给initial_val 那么数组的第一项就直接变成 initial_val
   否则 initial_val 开始 + arr[0]
  

    arguments 类数组 => 真正的数组 Array.from
    - Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

##  reduce
reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
上一次执行的结果
    callback （执行数组中每个值的函数，包含四个参数）

        1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
        2、currentValue （数组中当前被处理的元素）
        3、index （当前元素在数组中的索引）
        4、array （调用 reduce 的数组）

    initialValue （作为第一次调用 callback 的第一个参数。） 

## 手写代码方法
  1. 原理
  2. 从返回值入手 由结果向前推
  3. 分布式写法
  4. 多定义中间变量  计算的本质