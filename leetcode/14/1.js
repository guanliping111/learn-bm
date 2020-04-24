/**
 * @date 2020-4-24
 * @param {string[]} strs
 * @return {string}
 */

// var longestCommonPrefix = function(strs) {
//     if (strs === null || strs.length === 0) return "";
//     if(strs.length === 1) return strs[0]
//     let min = 0, max = 0
//     for(let i = 1; i < strs.length; i++) {
//         if(strs[min] > strs[i]) min = i
//         if(strs[max] < strs[i]) max = i
//     }
//     for(let j = 0; j < strs[min].length; j++) {
//         if(strs[min].charAt(j) !== strs[max].charAt(j)) {
//             return strs[min].substring(0, j)
//         }
//     }
//     return strs[min]
// };

var longestCommonPrefix = function(strs) {
    let n = strs.length;
    if(n == 0) {//判断是否为空数组
        return "";
        }
        strs.sort();//给字符串排序
        let first = strs[0];
        let last = strs[n-1];
        let min = Math.min(first.length(), last.length());//返回最小值 作为遍历边界
        let myHeaders = new Headers();
        for(let i = 0; i < min; i++) {
            if(first.charAt(i) == last.charAt(i)){
                myHeaders.append(first.charAt(i));//添加值
            }
            else{
                break;
            }

        }
        return myHeaders.tostring()


};