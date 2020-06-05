## 格式化上下文
koa: ctx === context

##  BFC
Block formatting contexts 阻塞格式化上下文
隔离的容器

## 新建BFC
- float
- absolute
- display:inline-blocks || table-cell || table-caption || flex || grid
- overflow 不为visiable
- 根元素默认新建 BFC

## flex 布局

## float 
设计本意：文字环绕 -> 后来被用来布局
clear:both 清除浮动

## BFC规则
- 盒子在垂直方向上，从上往下布局
- 两个同属框之间的垂直距离由“ margin”决定,
  同一个 BFC内 垂直方向 相邻 block-level-box之间的垂直边距margin 会折叠
- 由于有 float 元素， 一个盒子大小可能会缩小 除非新建了一个BFC
  (overflow 清除浮动)
- BFC区域 不会 float 重叠 两栏布局(左边固定，右边自适应)

## layout
normal flow
position
float
flex