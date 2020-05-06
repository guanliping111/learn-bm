//2020-5-6
//ts(typescript) 内置类型+外部类型  https://www.runoob.com/typescript/ts-type.html
//boolean  number  string
//数组 
//let arr: number[] = [1, 2];
// 元组  
//let x: [string, number];
//x = ['Runoob', 1]; 

//枚举
//enum Color {Red, Green, Blue};
//let color: Color = Color.Blue;
//console.log(color);    // 输出 2
//any  声明为 any 的变量可以赋予任意类型的值。
//void  表示该方法没有返回值。
//null, undefined
//never
//object

//实现功能  
// 1.全屏 2.退出全屏 3.是否全屏
//定义一个类型 进去全屏的时候只调用一个
type RFSmethods = 'requestFullscreen' | 'webkitRequestFullscreen' | 'mozRequestFullscreen' | 'msRequestFullscreen'
//dom 没有定义 自己定义
interface Element {
    requestFullscreen(): any,
    webkitRequestFullscreen(): any,
    mozRequestFullscreen(): any,
    msRequestFullscreen(): any,
}
//定义变量
let RFS_METHOD:RFSmethods
if('requestFullscreen' in document.body) {
    RFS_METHOD = 'requestFullscreen';
}
else if('webkitRequestFullscreen' in document.body) {
    RFS_METHOD = 'webkitRequestFullscreen';
}
else if('mozRequestFullscreen' in document.body) {
    RFS_METHOD = 'mozRequestFullscreen';
}
else if('msRequestFullscreen' in document.body) {
    RFS_METHOD = 'msRequestFullscreen';
}

function beFull(el: Element) {
    // 检查兼容性 
    // RFS_METHOD 4 个 中的一个
    // el.requestFullscreen();
    console.log(el, RFS_METHOD);
    el[RFS_METHOD]();
  }
//ts 结合原生 html dom
const btn = document.getElementById('btn');
const box = document.querySelector('.box');
if(btn) {
    btn.addEventListener('click', function(){
        //box.requestFullscreen();
        // 是不是 Element 的实例 ？？
        // Element 是内置的一个类
        // html 标签都是 Element 实例
        // box ： element | null 
        if(box instanceof Element) {
            beFull(box);
        }
    });
}


