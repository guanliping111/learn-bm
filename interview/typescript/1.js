//ts 的应用场景 
//ts是js的超集 
//类型检测 队友 用户  潜在bug 
//java c# 提出重写js -> typescript
//js 写起来很好 很优秀 农夫山权
const getUserInfo = function(user) {
    return `name: ${user.name}, age: ${user.age}`
}
//错误调用
// getUserInfo({name: 'koala', age: 18})
// getUserInfo()
// getUserInfo({name: 'kaola'})
// getUserInfo({name: 'kaola', height: 1.66})