//require 导入
// const math = require('./math');
// console.log(math);

const { add, minus } = require('./math');

// let result = add(3, 7);
// let expected = 10;
// if(result !== expected) {
//     throw new Error('3+7=10');
// }
// let result1 = minus(3, 7);
// let expected1 = -4;
// if(result1 !== expected1) {
//     throw new Error('3-7=-4');
// }

//封装
function expect(result) {
    return {
        toBe: function(value) {
            if(result !== value) {
                throw new Error(`预期值和真实值不一样`)
            }
        }
    }
}
// expect(minus(3,7)).toBe(-4);
// expect(add(3,7)).toBe(10);
//提示欠缺
function test (desc, fn){
    try {
        fn();
        console.log(`!:${desc}通过`)
    }
    catch(err) {
        console.log(`x:${desc}不通过`)
    }
}
test('测试加法', () => {
    expect(add(3,7)).toBe(10);
})
test('测试减法', () => {
    expect(minus(3,7)).toBe(-4);
})