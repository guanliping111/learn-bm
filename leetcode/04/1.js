/**
 * @date 2020-4-26
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let key = false;
    matrix.map((arr) => {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === target) key = true;
        }
    })
    return key;
};