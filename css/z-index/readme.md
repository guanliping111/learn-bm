## 
我们的网页 是沿着一条 z 轴排开的 (ps 图层)

## 层叠上下文形成
1. position 不为 static
2. filter transform perspective 不为 none
3. will-change

## layers
共同点： 都是z轴 顺序
 transform: translate3d
 will-change 设置为 opacity、transform、top、left、bottom、right
 postion: fixed
 perspective
 backface-visibility 为 hidden
 video 有 3D transform
 css3里面的 animation 动画开始的时候

对 opacity、transform、fliter、backdropfilter 应用了 animation 或者 transition（需要是 active 的 animation 或者 transition，当 animation 或者 transition 效果未开始或结束后，提升合成层也会失效）

## 
js -> relayout -> repaint -> composite(合成) -GPU

## 提升Layers 的好处
- 当前这个layers变化不会影响其他layers
- 对于 transform、opacity 产生变化了， 不会经过relayer repaint 跳到composite

## flex
主轴：x轴
交叉轴：y轴

- 以下6个属性设置在flex容器上。
display:flex
flex-direction: row cloum
flex-wrap: 如果一条轴线排不下，如何换行
justify-content: 定义了项目在主轴上的对齐方式
align-items: 定义项目在交叉轴上如何对齐(对一行)
align-content：(对多行)定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

- 以下6个属性设置在每一项上。
order: 定义项目的排列顺序。数值越小，排列越靠前，默认为0。
flex: 是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto (1 1 200px)
flex-grow：项目的放大比例，默认为0，即如果存在剩余空间，也不放大。为1 放大
flex-shrink：项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。为1 缩小
flex-basis：分配多余空间之前，项目占据的主轴空间
align-self


## 圣杯布局 双飞翼布局
left 固定
main 自适应
right 固定
html结构：让main在最前面
