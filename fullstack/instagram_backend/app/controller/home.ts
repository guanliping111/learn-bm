import { Controller } from 'egg';

//约定俗成 egg.js
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // node HTTP协议 基于应答式 ctx = request + Response
    // ctx.response
    ctx.body = 'hello 你好'
    // ctx.body = await ctx.service.test.sayHi('egg');
  }
}
