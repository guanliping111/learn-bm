## 2020-5-7
## 360 面试考题
 - 面试技巧
 - 鼠标移动渐变
  1. 渐变 radial-gradient
  2. 鼠标移动效果
  3. 用什么来做渐变元素
     一个轻量级元素 做增强效果 
     伪元素 ::before

- radial-gradient  径向渐变
    circle ：指定圆形的径向渐变
    closest-side :
    渐变的边缘形状与容器距离渐变中心点最近的一边相切（圆形）或者至少与距离渐变中心点最近的垂直和水平边相切（椭圆）。
- 要会计算页面宽高
  - pageX pageY 页面位置
  - offsetLeft 父元素位置 固定的
  x = e.pageX - e.target.offsetLeft  鼠标位置

- setProperty
 setProperty() 方法用于设置一个新的 CSS 属性，同时也可以修改 CSS 声明块中已存在的属性。
 语法：object.setProperty(propertyname, value, priority)

- transition 过渡效果 2s过渡
   transition: width .2s ease, height .2s ease;
- transform
  应用于元素的2D或3D转换。这个属性允许你将元素旋转，缩放，移动，倾斜等。
  transform: translate(-50%, -50%);
