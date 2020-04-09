//js es6 class 关键字 面向对象
const UUTD = require('uuid');//引入第三方库
class Wallet {
    //属性和方法组成
    constructor() {//构造函数里声明
        //console.log('欢迎使用支付宝钱包') 
        this._id = UUTD.v1().replace(/-/g,'');//  uuid.v1:基于时间戳生成 命名规则约定 _变量 表示私有private  
        this._createTime = + new Date();//创建时间 类型转换
        this._balance = 0;//余额 设计成私有的属性 安全
        this._modifyTime = new Date();//创建修改时间

        //console.log(this.id);
        //1.唯一 id  uuid 生成唯一的一个id
    }
    getBalance() {
        return this._balance;
    }
    increaseBalance(increaseAmount) {//重置
        console.log('多了' + increasedAmount );
        this._balance += increasedAmount;
        console.log('修改余额时间：' + glpWallet.setModifyTime());
        console.log('当前余额' + glpWallet.getBalance().toFixed(2));
    }
    decreaseBalance(decreasedAmount){
        this._balance -= decreasedAmount;
        console.log('修改余额时间：' + glpWallet.setModifyTime());
        console.log('当前余额' + glpWallet.getBalance().toFixed(2));
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
    setModifyTime() {
        return this._modifyTime;
    }
}

const glpWallet = new Wallet();
//console.log(glpWallet.getId());
//console.log(glpWallet.setId());
console.log(glpWallet.getCreateTime());
console.log('当前余额：' + glpWallet.getBalance().toFixed(2));
//glpWallet.increaseBalance(10,0);
glpWallet.decreaseBalance(6.1);
//console.log(glpWallet.getBalance().toFixed(2));


//glpWallet._id = '12122';//id属性只读 不能修改
//console.log(glpWallet.id);//id 是glpWallet的public属性