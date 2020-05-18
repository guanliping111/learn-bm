## 2020-5-18
- 博客网站
 React做UI  组件化思维
 - 列表
 - 详情页
 - 评论
 node 做后端   mysql mongodb
  1. 如何给应用提供数据
  - 爬取 cherrio
  - MVC Model(mysql)-View(react)-Controller(node)
  可以实现增删改查 但不启用mysql 繁琐
  - 简单服务的话， json 文件作为资源，代替数据库
  使用json-server来启动
  - yarn add json-server  json库
  .\node_modules\.bin\json-server --watch db.json --port 3300

  JSON 是数据格式 
  2. 设计一个URL 汇款需求 从账户1 向账户2 汇款500元

   理解： /accounts/:1/transfer/:520/to/:2
  restful 动词 + url
  资源
  /transaction 转账
  {from:1, to:2, amount:500.00}
  

- PUT请求：如果两个请求相同，后一个请求会把第一个请求覆盖掉。（所以PUT用来改资源）

  Post请求：后一个请求不会把第一个请求覆盖掉。（所以Post用来增资源）