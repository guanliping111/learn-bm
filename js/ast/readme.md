

- URL  输入 打开页面后 发生了什么
download  index.html  html标签
 1. 空白页面 
   启动了一个tab, 进程1(主进程)
 2. window.url = file:///E:/workspace/gitwork/learn-1/js/ats/index.html
   html 文档标记语言
   - tab 主进程url
   启动一个网络请求，进程2 url 
   - 渲染页面进程

- WEB应用 也是多进程框架
 当打开chrseome打开页面时
 启动四个进程
 1. tab 主进程 负责一次页面渲染
 2. 两个子进程 Network Service http 200
 3. GPU 计算 高速Css 绘制

 GPU加速 chrome 为了让页面加载更快

- BOM browser object modul
- DOM 
- abstract syntax tree 抽象语法树
- document.styleSheets

- 对象字面量 表达能力
- JSON

<div id="root">
  <span class="demo">
    This is a span.
  </span>
  <p>DOM</p>
</div>

表达一下

DOM 树   AST   Tree Abstract

