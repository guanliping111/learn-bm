/**
 * @author glp
 * @date 2020-4-14
 * @func 爬楼梯算法
 * @param {@type number} n 
 */
//递归算法优化
function climbStairs(n) {
    if(n >= 40) throw new Error('内存溢出');
    if(n == 1) return 1;
    if(n == 2) return 2;
    return climbStairs(n - 1) + climbStairs(n - 2);



    //数组
    // var a = []
    // a[1] = 1;
    // a[2] = 2;
    // for( i = 3; i <= n; i ++){
    //     a[i] = a[i-1] + a[i-2];
    // }
    // return a[n];


    // if(n<=2){
    //     return n;
    // }
    // var a = []
    // a[1] = 1;
    // a[2] = 2;
    // for( i = 3; i <= n; i ++){
    //     var temp = a[1] + a[2];
    //     a[1] = a[2];
    //     a[2] = temp;
    // }
    // return a[2]; 
};
console.log(climbStairs(34));