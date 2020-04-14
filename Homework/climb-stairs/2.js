function f(n) {
    if (n == 1) return 1;//退出条件
    return f(n-1) + 1//递推公式
}
console.log(f(1000));