/**
 * 
 * @param {number} w 
 * @param {number} h 
 */

//函数 计算正方形面积(
function area(w, h){//es5
//两个参数
    if(arguments.length < 2){
        console.error('参数不够');
        throw new Error('参数不够');
        return;
    }
    if (typeof w != 'number' || typeof h != 'number') {
        throw new Error('参数类型有误');
        return;
    }
    return w * h;
}
 console.log(area(1,2));


// var area = function(w, h) {//匿名函数

// }

// const getArea = (w, h) => w * h;//es6