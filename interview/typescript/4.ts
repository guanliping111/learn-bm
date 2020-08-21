// 类型定义文件  React PC
//类型 声明和业务分开
//最优化
interface IUser{
    name: string;
    age: number;
}
type IUserInfoFunc = (user: IUser) => string;
const getUserInfo4: IUserInfoFunc = (user) => {
    return `name: ${user.name}, age: ${user.age}`
}
