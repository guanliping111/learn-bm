/** 
**2020-4-23
**/
### es6
 - 类数组 ->不是数组 不能用foreach，map等数组的api
 - arguments 实参列表 类数组 
 - document.querySelectorAll 选出来的是nodelist 类数组对象

### Array.prototype.forEach()
- 可以重写数组的foreach方法 ，改变this指向 ，使得类数组能够用数组的api
 ``` js
    const array1 = ['a', 'b', 'c'];
    array1.forEach(element => console.log(element));

    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

 ```
### Array.from
- 从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
```js
    Array.from('foo'); 
    // [ "f", "o", "o" ]

    //从类数组对象（arguments）生成数组
    function f() {
    return Array.from(arguments);
    }
    f(1, 2, 3); // [ 1, 2, 3 ]

```

### 扩展运算符 ...
- 对象中的扩展运算符(...)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
-  [...str]
-  {...obj}
```js
    function add(x, y) {
    return x + y;
    }

    const numbers = [4, 38];
    add(...numbers) // 42
```
