//js es6 class 关键字 面向对象
const UUTD = require('uuid');//引入第三方库
class Wallet {
    //属性和方法组成
    constructor() {//构造函数里声明
        //console.log('欢迎使用支付宝钱包') 
        this._id = UUTD.v1().replace(/-/g,'');//  uuid.v1:基于时间戳生成 命名规则约定 _变量 表示私有private  
        this._createTime = + new Date();//类型转换
        this._balance = 0;

        //console.log(this.id);
        //1.唯一 id  uuid 生成唯一的一个id
    }
    getBalance() {
        return this._balance;
    }
    increaseBalance(increaseAmount) {//重置
        console.log('多了' + increaseAmount );
        this._balance += increaseAmount;
    }
    decreaseBalance(increaseAmount){
        this._balance -= increaseAmount;
    }
    getCreateTime( ) {
        return this._createTime;
    }
    getId() {
        return this_id;
    }
    setId() {
        throw new Error('私有属性_id 不可以修改');
    }
}

const glpWallet = new Wallet();
//console.log(glpWallet.getId());
//console.log(glpWallet.setId());
console.log(glpWallet.getCreateTime());
console.log(glpWallet.getBalance());
glpWallet.increaseBalance(10,0);
glpWallet.decreaseBalance(8.1);
console.log(glpWallet.getBalance().toFixed(2));


//glpWallet._id = '12122';//id属性只读 不能修改
//console.log(glpWallet.id);//id 是glpWallet的public属性