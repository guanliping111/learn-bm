## 原型链继承
```js
    Cat.prototype = new Animal();

    let c1 = new Cat();   // eat = ['fish']
    let c2 = new Cat();   // eat = ['meat']
    let c3 = new Cat();
    let c4 = new Cat();
    c1.eat.push('fish');
    c2.eat.push('meat');
    // c1 c2 ... __proto__ 都会指向同一个地方 => 共享问题
```

## 