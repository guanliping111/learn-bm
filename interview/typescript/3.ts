//面向接口的编程 是一切高级编程范式的开端  使用设计模式
// interface java用的很好
interface IUser{
    name: string;
    age: number;
}
const getUserInfo3 = (user: IUser): string => {
    return `name: ${user.name}, age: ${user.age}`
}