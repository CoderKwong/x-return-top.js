
x-return-top
===============

> 纯javascript代码实现的“返回顶部”功能，代码非常简单，集成起来更简单

在制作网页中，经常会发现网页非常长，为了用户的方便，都会设置返回顶部的按钮，用户一键返回网页顶部；
如果你的网站中使用jquery，那么有很多的插件可以完成这个工作，可以在git中搜索很多。

然而，如果你的网页中没有使用jquery，那么如果要使用这些插件，就必须为了这一个很小的功能，加上jquery，对于网页的加载速度非常不划算。

## 说明 ##

- git上大部分的“返回顶部”项目都是基于jquery，使用前必须应用jquery
- git上部分纯javascript实现的“返回顶部”，无动画，不美观
- 本项目使用纯javascript，实现动画，美观且不影响网页加载速度，不依赖任何js框架
- 压缩之后2.3kb（变量混淆会更小，为了保持可读未做混淆）
- 集成非常简单
- 使用部分css3动画，所以兼容性你懂的（但是不会影响使用，后续会改为js动画）
- css使用js动态加载，集成更方便，且不影响网页加载速度

## Demo ##

 - Live Demo 1: [http://50vip.com](http://50vip.com)
 - Live Demo 2: [http://www.atool.com](http://www.atool.com)
 - 项目代码中的index.html
![](https://raw.githubusercontent.com/hustcc/x-return-top.js/master/screenshot/shot.gif)

## TODO ##

- 增加自定义配置
- 图片打包，减少网络连接
- 将css集成到js中，使集成更简单


