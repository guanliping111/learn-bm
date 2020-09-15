## BFC 块级格式化上下文
- 创建块格式化上下文 BFC
1. 根元素根元素默认新建 BFC（<html>）
2. float 不是 none
3. position的值不为relative和static ,为absolute 
4. display:inline-blocks || table-cell || table-caption || flex || grid
5. overflow 不为visiable

- BFC解决float原理之一
- 外边距塌陷
    创建新的 BFC 避免两个相邻 <div> 之间的 外边距合并 问题




mdn:https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context
10 分钟理解 BFC 原理： https://zhuanlan.zhihu.com/p/25321647