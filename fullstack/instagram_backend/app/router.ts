//路由配置
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  // controller url -> controller -> render view
  // 路由列表 nginx(服务器代理 ip http://www.baidu.com 
  // -> ip -> nginx 8080端口(负载均衡 内网哪台机器)
  // -> 
  //后端路由 / MVC controller / index.html #root / /api
  //前端路由 react build js 挂载 单页面应用路由 SPA 更快 
  //  useEffect -> reducer action -> api 
  //  -> 后台/api/user /api后端 数据查询 吐数据的地方给前端
  // -> egg.js 7001端口)
  router.get('/', controller.home.index);
  //登录接口 /api/login
  router.get('/api/login', controller.login.index);
};
