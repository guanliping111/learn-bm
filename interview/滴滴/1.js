let obj = { a: '1', b: {c:2}, d:[1,2,3]};
//深拷贝
//数据在更新的时候，通知一下模板
Object.defineProperty(obj, 'a', {
    //Object.defineProperty：在对象上定义新属性 或者修改已有的属性
    get: function() {
        console.log('get value');
        return val;

    },
    set: function (newVal) {
        console.log('change value');
        //通知template 模板 更新
        val = newVal;
    }
})
obj.a = '2';
obj.a
