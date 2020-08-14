import { Controller } from 'egg';

class UserController extends Controller {
    //面向对象写法 阿里让新手做开发
    public async index() {
        //后端返回 JSON 
        this.ctx.body = JSON.stringify({
            msg: '登录成功'
        })
    }
}
export default UserController;

  