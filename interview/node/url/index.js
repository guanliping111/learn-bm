//const url = require('url');
const url = "http://baidu.com:8080/test/h?query=js&a=1#node"; //url 字符串
//console.log(url.parse(urlString));   
 //47min
function getQueryString(urlStr) { //查询对象
    var obj = new Object();
    if (urlStr.indexOf("?") != -1) { //查询参数部分
        var queryStr = urlString.split('?')[1];
        if(urlStr.indexOf('#') != -1) {
            queryStr = queryStr.split('#')[0];
        }
        console.log(queryStr);
    }
    return obj; 
}
 
getQueryString(urlString);