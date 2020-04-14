//优化爬楼梯
// 因为递归造成了大量的重复子问题，假设走100阶台阶，
// 递归立马要去算怎么走到第99阶，怎么走到第98阶 
// 因为f(100) = f(99) + f(98)，
// 然后一层一层下去，中间造成了大量的浪费，
// 其实我们只要将每一阶的走法存下来就可以避免重复计算了

function f(n) {
    const w = new Map();//es6 新的数据结构map
    //if(n >= 40) throw new Error('内存溢出');
    if (n == 1) return 1;
    if (n == 2) return 2;
    if(w.has(n)){//将每一阶的走法存下来
        return w.get(n);
    }
    const ret = f(n-1) + f(n-2);
    w.set(n,ret);
    console.log(n,'------------');
    return ret;
}
console.log(f(6));