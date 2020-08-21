import { LoginEntity } from '../model/login';

//项目所有请求API的列表文件
//每个请求一个函数, 每个函数都返回一个promise

//api与actions的分离点
//axiosInstance.get 返回是Promise

export const isVaildLogin = (loginInfo: LoginEntity):Promise<boolean> => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve(loginInfo.login === 'admin' && loginInfo.password === 'test');
        },500)
    })