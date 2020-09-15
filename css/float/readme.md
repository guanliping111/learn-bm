## float 
设计本意：文字环绕 -> 后来被用来布局
clear:both 清除浮动

float: left  浮动在其所在的块容器最左边 允许文本和内联元素环绕它

- 为什么要清除浮动(原理)

- 清除浮动的方法
1. 用伪元素清除浮动 ：  clear
.clear::after {
      content: '';
      clear: both;
      display: block;
    }

2. 运用Bfc的规则 清除浮动
 overflow: hidden
 
## BFC 块级格式化上下文 规则
- 盒子在垂直方向上，从上往下布局
- 两个同属框之间的垂直距离由“ margin”决定,
  同一个 BFC内 垂直方向 相邻 block-level-box之间的垂直边距margin 会折叠
- 由于有 float 元素， 一个盒子大小可能会缩小 除非新建了一个BFC
  (overflow 清除浮动)
- BFC区域 不会 float 重叠 两栏布局(左边固定，右边自适应)

## 伪类 伪元素
- 伪类
伪类：link 表示链接正常情况下（即页面加载完成时）显示的颜色
	    hover:表示鼠标悬停时显示的颜色
	    visited:链接被点击时显示的位置
	    focus：元素获得光标焦点时的颜色
	    active: 元素处于激活状态
	link -> visited -> hover -> focus -> active

- 伪元素

## position
absolute: 相对于 它的 containing block(包含块)

## containing block (包含块)
https://developer.mozilla.org/zh-CN/docs/Web/CSS/All_About_The_Containing_Block

盒子大小，尺寸都是根据我们包含块来计算，
一个元素的包含块：containing block箱子，箱子装着元素，箱子里面的元素放到哪里，大小？
首先先确定包含块的位置大小。

```css
width: 100%;  // 父级 （x）
height: 100%;
```

## 怎么确定 containing block (包含块)
确定一个元素的包含块的过程完全依赖于这个元素的 position 属性：

- 如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块元素（比如说inline-block, block 或 list-item元素）。
- 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素。
- 如果 position 属性是 fixed，是 viewport ,
- 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近父级元素的内边距区的边缘组成的：
  - transform / perspective 不是 none
  - will-change 是 transform / perspective
  - filter 的值为none 或者 will-change 的值是 filter(only works on Firefox).
  - contain 是 paint (例如: contain: paint;)