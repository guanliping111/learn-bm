"use strict";
//2020-5-6
//ts(typescript) 内置类型+外部类型  https://www.runoob.com/typescript/ts-type.html
//boolean  number  string
//数组 
var arr = [1, 2];
// 元组  
var x;
x = ['Runoob', 1];
//定义变量
var RFS_METHOD;
if ('requestFullscreen' in document.body) {
    RFS_METHOD = 'requestFullscreen';
}
else if ('webkitRequestFullscreen' in document.body) {
    RFS_METHOD = 'webkitRequestFullscreen';
}
else if ('mozRequestFullscreen' in document.body) {
    RFS_METHOD = 'mozRequestFullscreen';
}
else if ('msRequestFullscreen' in document.body) {
    RFS_METHOD = 'msRequestFullscreen';
}
function beFull(el) {
    // 检查兼容性 
    // RFS_METHOD 4 个 中的一个
    // el.requestFullscreen();
    console.log(el, RFS_METHOD);
    el[RFS_METHOD]();
}
//ts 结合原生 html dom
var btn = document.getElementById('btn');
var box = document.querySelector('.box');
if (btn) {
    btn.addEventListener('click', function () {
        //box.requestFullscreen();
        // 是不是 Element 的实例 ？？
        // Element 是内置的一个类
        // html 标签都是 Element 实例
        // box ： element | null 
        if (box instanceof Element) {
            beFull(box);
        }
    });
}
