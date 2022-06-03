---
title: Vuepress博客美化之插件
date: 2022-06-03
categories:
 - 博客
tags:
 - 博客
 - 插件
 - 美化
---

## 序

在 [Vuepress博客美化之模版](https://blog.mojy.xyz/archives/2022/vuepress-blog-template.html) 中，我们安装好了 Vuepress 并部署好了模版，制作了一个相对简易的博客。

为了丰富站点的功能，我们可以直接使用一些现有的插件。本篇像大家讲讲博客所常用的插件。

## 1. 公告栏弹窗

[插件文档](https://vuepress-theme-reco.recoluan.com/views/plugins/bulletinPopover.html)

### 安装

``` sh
npm install @vuepress-reco/vuepress-plugin-bulletin-popover
```

### 使用

``` js
plugins: [
  ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
    width: '300px', // 默认 260px
    title: '消息提示',
    body: [
      {
        type: 'title',
        content: '欢迎加入QQ交流群 🎉🎉🎉',
        style: 'text-aligin: center;'
      },
      {
        type: 'image',
        src: '/rvcode_qq.png'
      }
    ],
    footer: [
      {
        type: 'button',
        text: '打赏',
        link: '/donate'
      },
      {
        type: 'button',
        text: '打赏',
        link: '/donate'
      }
    ]
  }]
]
```

弹窗分为三部分，公告标题、公告内容和公告底部操作。其中标题是普通文本，公告内容和公告底部操作内容均为数组，支持 4 种 dom，需要通过 schema 配置来控制显示效果，可以根据需要自由组合：

#### 标题

``` json
{
  type: 'title',
  content: '这里显示 h5 标题'
}
```

#### 文本

``` json
{
  type: 'text',
  content: '这里显示普通文本'
}
```

#### 图片

``` json
{
  type: 'image',
  src: '/rvcode_qq.png'
}
```

#### 按钮

``` json
{
  type: 'button',
  text: '打赏',
  link: '/donate'
}
```

#### 给 dom 添加样式

``` json
{
  type: 'title',
  content: '这里显示 h5 标题',
  style: 'text-aligin: center;'
}
```

### 效果截图

<img src='https://vuepress-theme-reco.recoluan.com/assets/img/bulletin-popover.967ff934.png'>

## 2. 代码复制

[插件地址](https://github.com/znicholasbrown/vuepress-plugin-code-copy)

### 安装

``` sh
npm install vuepress-plugin-code-copy
```

### 使用

``` js
plugins: [['vuepress-plugin-code-copy', true]]
```

它会显示一个复制图标，也是最常用的代码复制插件。

<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/vuepress-blog-plugin.html](https://blog.mojy.xyz/archives/2022/vuepress-blog-plugin.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
