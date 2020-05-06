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
