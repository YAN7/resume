## [**Me**](https://yan7.github.io/resume/#page1)

### 项目简介
- 这是基于jq插件fullpage.js开发的一个实现了全屏滚动的项目，并使用了ajax获取到message.json下数据并渲染到页面上.

### 核心技术
- fullpage.js
  + 通过`$.fn.fullpage`生成fullpage实例；
  + 使用afterload函数设置滚动到某一屏后的回调函数，接收anchorLink和index两个参数，anchorLink是锚链接的名称，index是序号，从1开始计算;
  + 使用onLeave函数设置离开该页面时候回调函数,接收 index、nextIndex 和 direction 3个参数;
    + index 是离开的“页面”的序号，从1开始计算；
    + nextIndex 是滚动到的“页面”的序号，从1开始计算；
    + direction 判断往上滚动还是往下滚动，值是 up 或 down。
  + 通过jq中animate方法中的第三个参数回调函数来制作循序渐进的动画。
  + 发现很多商品介绍网站都是用这种全屏滚动加大图片加上循序渐进的动态效果做的。可以学习参考。
- ajax
  + 利用jq的ajax方法发送get请求获取到message.json的数据;
  + 利用字符串拼接将获取到数据渲染到页面中，并给数据加上相应的类名，方便js控制;
  + 所以整个index页面是很简洁的，保证代码整洁是一个非常好的代码风格；
  + 但是整个用ajax渲染数据有一个弊端，就是seo抓取不到通过ajax获取的数据，所以这个方法只适合做一些不需要seo的项目，比如个站。
- css3
  + 使用了背景色线性渐变;
    +
  + 使用了c3的新单位vw，vh做移动端的自适应布局；
    + vw，vh是当前浏览器宽度、高度的百分比，100vw，100vh分别代表当前浏览器的宽度和高度，和‘%’的功能一样，两者基本可以相互转化;
    + vw,vh的好处是不用给父元素乃至html标签都设置百分比，那个标签需要设置百分比直接给给vw，vh就可以了，这点是非常方便的;
