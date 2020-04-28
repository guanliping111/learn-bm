## date 2020-4-27
## DOM document 文档就是网页
- js -> html 转化
- appendChild
- 如何添加文本
ul>li>Textnode
document.createElement('tag') 标签节点 => nodeType值=1 可以添加属性值 
document.createTextNode(tag) 文本节点  => nodeType值=3

tag: 为对象 object 为标签 为文本
- nodeType

插入html标签 步骤
1. document.createElement('tag') 
2. document.createTextNode(student.name) 
3. oLi.appendChild(oA);

