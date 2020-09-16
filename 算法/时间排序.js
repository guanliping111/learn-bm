//字符串形式的时间排序
const timeCompare = (time1, time2) => {
    let t1 = time1.split(':');//切割
    let t2 = time2.split(':');
    //split() 方法使用指定的分隔符字符串将一个String对象分割成子字符串数组，
    //以一个指定的分割字串来决定每个拆分的位置。 
    //12:30:30s
    //12:30
    let len = Math.max(t1.length, t2.length);
    for (let i = 0; i < len; i ++) {
        //以长度更长的为循环条件
        //少一位的补0
        let num1 = t1[i] ? parseInt(t1[i]) : 0;
        let num2 = t2[i] ? parseInt(t2[i]) : 0;
        if(num1 > num2) {
            return 1;
        }
        else if(num1 < num2) {
            return -1;
        }
    }
    return 0;
}
//[].sort() 升序排列
let arr = [1,2,3,4,5];
// arr.sort((a, b) => {
//     if(a > b) {
//         return 1; //交换位置 b 会被排列到 a 之前。
//     }
//     else if(a < b) {
//         return -1; //那么 a 会被排列到 b 之前
//     }
//     else{
//         return 0; // a 和 b 的相对位置不变
//     }
// })
arr.sort((a,b) => a - b);
console.log(arr); //[ 1, 2, 3, 4, 5 ]

let times = ["14:30:30", "14:30:29", "14:29:29"];
times.sort(timeCompare);
console.log(times);