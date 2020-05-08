## 2020-5-6
## css4
- css4  推出了css variable 能力 可以实现stylus(预编译) 一样的效果， css 是原生支持的 
- stylus 在头部定义变量， variable = value
  把变量集中在头部定义 
- css3 css4
- css新特性
 animation 动画
 box-shadow
 border-radius
 box-sizing:border-box 盒子模型
 transition (css属性修改带来过渡)过渡
 形状转换   transform
 颜色  rgba 渐变 透明
 弹性布局  Flex
 栅格布局 grid filter
 linear-gradient

- 弹性布局 flex
  1. flex-direction属性决定主轴的方向（即项目的排列方向）
  2. flex-grow  属性定义项目的放大比例，默认为0，获得剩余空间的某等分。 

  - main标签 放到第一位 优先实现
   绘制页面（布局，大小，颜色）需要花时间 main 区域内容很重要，吸引用户眼球
   order:-1 移到前面去
  
  
  - 三栏布局 （可用传统的双飞翼 圣杯布局）
  3. flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto
  4. order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0


## flex 弹性布局
- 父元素属性
  - flex-direction : row(默认 水平) | column  -reverse
  - flex-wrap : nowrap(默认不换行) | wrap | wrap-reverse
  - flex-flow : <flex-direction> || <flex-wrap> 简写形式
  - justify-content : 主轴对齐方式，默认水平 
                     flex-start(左对齐) | flex-end(右对齐) | center | space-between(两端对齐) | space-around(两侧间隔相等)
  - align-items : 交叉轴对齐方式 
                     flex-start | flex-end | center 
                     baseline(项目的第一行文字对齐) | stretch(占满容器)
  - align-content : 多根轴线的对齐方式 多行/列
                    flex-start | flex-end | center | space-between | space-around | stretch

- 子元素属性
  - order : 数字越小排列越靠前
  - flex-grow : 放大比例，默认0
                所有项目为1 等分空间
                一个项目为1 其余为固定值 这个项目占据剩余所有空间
  - flex-shrink : 缩小比例，默认1 空间不足则缩小
  - flex-basis : 在分配多余空间之前，项目占据的主轴空间  默认auto px / %
                flex : 0 0 25% (占据25%空间 不自动缩小)
  - flex : <flex-grow> <flex-shrink> <flex-basis>简写
  - align-self : 单个项目设置特殊的排列 会覆盖align-items 

应用 双飞翼、圣杯布局、悬挂式、固定的底栏、网格布局