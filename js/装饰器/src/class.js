//装饰 class类 的时候 能够拿到这个 Class
// 属性 方法
function observer(target) {
    target.displayName = 'XXXX';
    return target;
}

@observer 
class Com {
    render() {
        return '123'
    }
}

console.log(Com.displayName); // XXXX