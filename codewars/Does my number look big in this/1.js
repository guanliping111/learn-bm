function narcissistic(value) {
    let arr = [...value.toString()];//把数字转成字符串，然后使用扩展运算符将其按每位分割成一个数组
    return arr.reduce( //使用reduce方法进行过求和，最后判断是否等于传入的数字
        (pre, cur) => pre += Math.pow(parseInt(cur), arr.length),
        0) === value;
 }