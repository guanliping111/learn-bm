/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
      
    // let flag = false,number ='';
    // if(x < 0) {flag = true,x = Math.abs(x)};
    // let arr = [...x.toString()];
    // if(flag) number = '-'
    // for(let i = arr.length-1; i >= 0; i--){
    //     number += arr[i]
    // }
    // let num = parseInt(number)
    // if (num>2147483647||num<-2147483648) {
    //     return 0
    // }else{
    //     return num
    // }


// 先把符号去掉，按正整数处理
// 把数字转成字符串，反转字符串
// 因为最大合法数字是10位数，正值为2147483647，负值为2147483648，所以大于10位的直接返回0；小于10位的一定没问题；等于10位的，直接按字符串比较大小。
    let fh = "", re;
    if(x<0){
        fh = "-";
        x = 0 - x;
    }
    re = (x+"").split("").reverse().join("");
    if(re.length>10 || re.length === 10 && re > (x<0?"2147483648":"2147483647")){
        return 0;
    }else{
        return fh + re;
    }

};