## HTML5语义化标签

- <hr /> 下划线  不用
   https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/hr

- 对传统div块级元素 + span 行内元素 + css 重构  
  1. p > div 
  2. 爬虫 蜘蛛看不见

- 为什么要语义化？
1. 代码结构: 使页面没有css的情况下，也能够呈现出很好的内容结构
2. 有利于SEO: 爬虫依赖标签来确定关键字的权重，因此可以和搜索引擎建立良好的沟通，帮助爬虫抓取更多的有效信息
3. 提升用户体验： 例如title、alt可以用于解释名称或者解释图片信息，以及label标签的灵活运用。
4. 便于团队开发和维护: 语义化使得代码更具有可读性，让其他开发人员更加理解你的html结构，减少差异化。
5. 方便其他设备解析: 如屏幕阅读器、盲人阅读器、移动设备等，以有意义的方式来渲染网页。

   

1. hgroup元素
   hgroup元素代表“网页”或“section”的标题，
   当元素有多个层级时，该元素可以将h1到h6元素放在其内，
   譬如文章的主标题和副标题的组合

   <hgroup>
    <h1>这是一篇介绍HTML 5语义化标签和更简洁的结构</h1>
    <h2>HTML 5</h2>
   </hgroup>

2. aside + article(main/content) 
3. nav + ol>li
4. <abbr> </abbr> 定义缩写
    <abbr title=" World Wide Web">WWW</abbr>
5. figure  
   <figure>是图像，插图，图表，代码片段等，在文档的主流程中引用，
   但可以移动到文档的另一部分或附录而不影响主流程。
  <figure>
    <img src="/media/examples/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
  </figure>
6. pre + code
   pre + samp
<pre> 元素表示预定义格式文本
   在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来