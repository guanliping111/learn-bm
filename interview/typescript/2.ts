//类型约束
const getUserInfo2 = (user: {name: string, age: number }): string => {
    return `name: ${user.name}, age: ${user.age}`
}