/**
 * @date 2020-4-26
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var findNumberIn2DArray = function(matrix, target) {
//     let key = false;
//     matrix.map((arr) => {
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] === target) key = true;
//         }
//     })
//     return key;
// };

var findNumberIn2DArray = function(matrix, target) {
    let k = false;//初始化 返回布尔值
     for(let i = matrix.length; i > 0; i--) {//从矩阵左下方第一个元素判断
         if(matrix[i-1][0] <= target) {//下标从0开始
            //includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
             if(matrix[i-1].includes(target)) {//判断数组中是否包含目标值
                 k = true;
                 i = -1;
             }
         }
     }
     return k;
 }