/**
 * @param {string} date
 * @author guan
 * @date 2020-4-22
 * @return {number}
 */
var dayOfYear = function(date) {
    // let [year,month,day] = date.split('-').map(parseFloat);


    //用户输入的日期字符串 now 表示现在时间
    // var now="2020-03-30"
    // var nowDate =new Date(now);
    // //${}把里面的表达式变成字符串
    // var firstDayDate =new Date(`${nowDate.getFullYear()}-01-01`);//当年第一天
    // //计算两个日期之间间隔的毫秒数
    // //getTime() :返回距 1970 年 1 月 1 日之间的毫秒数
    // var ms =nowDate.getTime() - firstDayDate.getTime();
    // var days =parseInt(ms/(1000*60*60*24))+1;
    // console.log(days);


    var year = date.substr(0, 4);
    var mouth = date.substr(5, 2);
    var day = date.substr(8, 2);
    var sum = 0;
    var arr = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        arr[1] = 29;
    }
    for (var i = 0; i < mouth - 1; i++) {
        sum = sum + arr[i];
    }
    sum = sum + day * 1;
    return sum;

};