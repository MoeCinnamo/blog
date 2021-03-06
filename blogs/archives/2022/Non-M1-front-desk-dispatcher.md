---
title: 苹果在非M1 iPadOS 16上测试台前调度，未达到满意要求？
date: 2022-06-23
categories:
 - 新闻
tags:
 - Apple
 - 系统
---

## 序

[IT之家](https://www.ithome.com) 6 月 15 日消息，随着更多 WWDC22 后对苹果软件工程主管 Craig Federighi 的采访浮出水面，我们继续了解苹果这样做的原因，即为何 iPadOS 16 的新 Stage Manager （台前调度）功能仅限于配备 M1 芯片的 iPad。

iPadOS 16 的主要功能之一是台前调度（Stage Manager），可首次在 iPad 上通过单一视图纵览不同大小相互重叠的窗口，带来全新的多任务处理体验。

但是为什么它只能在M1 iPad使用呢？

最新的采访由福布斯 David Phelan 报道，他询问 Federighi，苹果是否试图让台前调度在没有 M1 芯片的 iPad 型号上工作。作为回应，Federighi 表示<strong>苹果在其他 iPad 上对该功能进行了一些早期测试，但苹果对这些设备上的体验并不满意。</strong>

“我们开始了一些涉及这些系统的原型设计，但很明显，我们无法提供我们正在设计的体验，”他说。“当然，我们很乐意为每一台设备带来任何新体验，但我们也不想阻碍新体验的定义，我们想为这种体验的未来创造最好的基础。我们真的只有在 M1 上构建才能做到这一点。”

在本周早些时候分享采访中，Federighi 表示<strong> M1 芯片的性能确保台前调度中使用的所有应用都能“即时响应”</strong>，正如客户对基于触摸的界面所期望的那样。

难道仅仅是如此吗？

## 言

::: tip
众所周知，在美国有一个既爱吹硬件，又爱吹软件的厨子

一天，厨子拿起他自家的A12Z得意洋洋的说："我这颗芯片强力无比，比市面上90%的笔记本芯片都快！你的下一台电脑何必是电脑。"

又过了几天，厨子拿起自家的iPadOS 16得意洋洋的说："我的系统台前调度超级厉害，没有什么多任务是它搞不定的。"

然后有人问道："嘿！厨子，拿你的A12Z跑你的iPadOS 16结果将会怎么样呢？"

厨子尴尬的说不出话来...
:::

这是知乎网友的一番话，但是却真正的说明了真相。

为什么台前调度功能仅提供给搭载M1芯片的iPad机型？

按苹果软件工程主管克雷格·费德里吉的说法：

::: tip
"只有搭载了M1的iPad能将高容量的DRAM与非常高的容量、高性能的NAND相结合，使我们的虚拟内存交换速度超快。"

"台前调度之所以能够实现，是因为虚拟内存交换"
:::

但是，矛盾的是：搭载了M1的iPad Air 5最低配机型是64GB版本，它是不支持内存交换的，但它仍然支持iPadOS 16的台前调度功能！

因此，苹果的迷惑操作让大家都很难以理解。

## 后言

9to5Mac通过查看iPadOS 16代码发现，苹果有一种内部模式，可以在旧版iPad上启用台前调度，代码中提到了一个内部设置，为“传统设备”启用“Chamois”（台前调度的代号）。换句话说，该模式能使台前调度功能适用于所有其它运行 iPadOS 16 的非 M1 iPad。

这也证实苹果公司软件工程主管克雷格-费德里吉（Craig Federighi）此前在接受采访时的说法，他说苹果公司在决定该功能需要 M1 芯片之前，在更多的 iPad 型号上对其进行了测试，但体验不理想。

当然这并不意味着台前调度在旧款 iPad 上能顺利运行，但在 iPadOS 16 的第一个开发者测试版中隐藏这一选项(小喵实测第二个开发者测试版中也无这一选项)，表明该公司的工程师可能仍在其他一些 iPad 型号上进行该功能的测试。

目前还不清楚苹果是否会改变 iPadOS 16 中对台前调度的硬件要求。IT之家了解到，去年 macOS Monterey 发布时，Live Text（实时字幕）是 M1 Macs 的专属功能。然而，用户强烈不满后，苹果公司将该功能也提供给了英特尔 Mac。

## 后记

不确定是否可以，但是看情况应该是会在以后兼容非 M1 iPad 的，大家敬请期待。

## 参考资料

[知乎.如何看待苹果高管称曾在非 M1 iPad 上测试 iPadOS 16「台前调度」，未达到满意要求？](https://www.zhihu.com/question/537793389/answer/2532340452)

<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/Non-M1-front-desk-dispatcher.html](https://blog.mojy.xyz/archives/2022/Non-M1-front-desk-dispatcher.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
