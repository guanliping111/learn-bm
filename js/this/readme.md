### 2020-4-20

## this
**运行时**决定的,跟定义时候无关
```js
function foo() {
  this.a + b;
}
foo
```
- 默认 this 指向了 window
- 对象. 调用 指向 对象
```js
  var obj1 = {
    a: 1,
    say: function() {
      console.log(this.a);
    }
  }
  obj1.say()
  ```
- call/apply 调用，指向我们的第一个参数
    call  需要把实参按照形参的个数传进去
    apply 需要传arguments
    两者作用：改变this指向
    两者区别：传参列表不同