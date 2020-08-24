- 面试题想考查什么
牛客网 刷题
面试时间 > 准备时间

1. css属性名称是否大小写敏感
    - css属性名和值不区分大小写
    - id className querySelector 敏感

2. margin-top和margin-bottom对行内元素是否起作用?
    - 盒子模型
    - margin
    - 行内元素

    当我们使用内边距时，只有左右方向有效,
    设置四个方向的内边距padding时，对于行内元素，确实显示出效果，
    但是垂直方向的内边距只有效果，对其他元素没有影响，
    垂直方向,外边距margin没有效果
    

3. 有一个<P>标签是font-size: 10rem，标签中的文本大小是否会随着窗口尺寸的改变而改变?
- 怎么回答才完美
    自适应
    flexible.js 老了
    rem、em 
        rem 一切可依赖 等比例关系 px2rem
        蓝狐 用法 设计稿的宽750px 
        手机宽度多变  html的font-size 宽度变化
    media、 query
    vw/wh 适用于比例
        一切都是100vw
    vm 方案如何做适配
    百分比
    calc
    postcss
    适配 我还用过vue/react + vw 实现
        js babel
        工作流 webpack
        webpack css .styl .scss -> css-loader stylus-loader stylus css 编译
        postcss 全新的css库 平台 插件系统
        babel-core autoprefixer 自动完成
        box-shadow
        -webpack-box-shadow
        cssnext css variable
        vue 
          postcss太强大
          vue内置了postcss .postcssrc.js
