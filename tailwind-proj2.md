# Tailwind 练手项目 2

这次换了个 up 又滚完了一遍 tailwind，算是拾遗补缺了，之前的笔记：

- [Tailwind CSS 速成](https://blog.csdn.net/weixin_42938619/article/details/132730438)
- [Tailwind 练手项目](https://blog.csdn.net/weixin_42938619/article/details/132764130)

首先说两点我看完 up 视频，比较喜欢的点：

1. flex 结构基本上就是用这个模板：`flex flex-col m-6 space-y-10 md:flex-row md:space-y-0 md:m-0"`，这个布局是小屏幕上上下分布，中型屏幕以上左右分布的常规套路。`space-<x, y>-<num>` 是一个工具类名，用来控制所有子类的 margin，官方文档的例子是： `space-y-1 > * + *	margin-top: 0.25rem; /* 4px */;`。

2. 没有多加无意义的 breakpoints，都是以 mobile first 的设计理念

3. 终于用了 directives

   我找了一下，除了排版会放在一起之外，加到 `@layer` 里的 CSS 会对 `:` 有效，如假设将 `btn` 加到 `@layer components {}` 中，那么就可以直接使用状态

   这点其实我还没太理解，原文是这个：

   > Wrapping any custom CSS with @layer also makes it possible to use modifiers with those rules, like `hover:` and `focus:` or responsive modifiers like `md:` and `lg:`.

   是说内部可以直接实现移动端 CSS，不需要再用 `media-query`？那看来直接 override 没办法这么做……？

4. 状态的嵌套，如：`dark:md:hover:bg-fuchsia-600`

我不太喜欢的一点是会添加额外的 claa 做样式，理论上来说用 pseudo-element，HTML 的结构会更加干净一点，不过这个 up 好喜欢用 `group>div+div+div` 这样的结构去做样式啊……
