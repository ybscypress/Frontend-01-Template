## 排版与绘制流程

### 排版
* 收集元素进行（hang，行列的行）
  * 根据主轴尺寸，把元素分进行
  * 若设置了 no-wrap， 则强行分配进第一行
* 计算主轴
  * 找出所有 flex 元素
  * 把主轴方向的剩余尺寸按比例分配给这些元素
  * 若剩余空间为负数，所有 flex 元素为 0， 等比压缩剩余元素
* 计算交叉轴
  * 根据每一行中最大元素尺寸计算行高
  * 根据行高 flex-align 和 item-align, 确定元素具体位置

### 绘制
* 绘制单个元素
  * 绘制需要依赖一个图形环境
  * 采用 npm 的 images 包， npm install images
  * 绘制在一个 viewport 上进行
  * 与绘制相关属性：background-color, border, background-image 等

* 绘制 DOM
  * 递归调用子元素的绘制方法完成 DOM 树的绘制
  * 忽略一些不需要绘制的节点
  * 实际浏览器中，文字绘制是难点，需要依赖字体库
  * 实际浏览器中，还会对一些图层做 compositing
  
## CSS
* CSS 2.1 的语法
  * https://www.w3.org/TR/css-syntax-3/ https://www.w3.org/TR/CSS21/grammar.html#q25.0

* 规则对应链接
  * @charset: https://www.w3.org/TR/css-syntax-3/
  * @import: https://www.w3.org/TR/css-cascade-4/
  * @media: https://www.w3.org/TR/css3-conditional/
  * @page: https://www.w3.org/TR/css-page-3/
  * @counter-style: https://www.w3.org/TR/css-counter-styles-3
  * @keyframes: https://www.w3.org/TR/css-animations-1/
  * @fontface: https://www.w3.org/TR/css-fonts-3/
  * @supports: https://www.w3.org/TR/css3-conditional/
  * @namespace: https://www.w3.org/TR/css-namespaces-3/