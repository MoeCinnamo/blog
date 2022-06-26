---
title: Vuepress博客美化
date: 2022-06-26
categories:
 - 博客
tags:
 - 博客
 - 美化
---

## 序

做博客经常会使用像WordPress、typecho等程序，甚至也有人会使用像 [MX-space](https://github.com/mx-space) 个人空间这样的程序，但是对于我这种服务器渣渣的同学来说，它们非常复杂，而且也不会太稳定。但由于我之前使用过 Vuepress 文档系统，我认为我可以使用 Vuepress 进行优化实现博客的目的。为了丰富站点的功能，也可以直接使用一些现有的插件。

## 模版

对于已经部署好 Github 库的人来说，它非常简单。对于使用服务器的人来说，它也不会有多么复杂。

我这里使用的是 [vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com)

### 安装方法

它安装很简单，只需要简单的执行命令即可。

#### 安装 Vuepress

首先安装 Vuepress 文档系统，执行：

``` sh
mkdir vuepress-starter && cd vuepress-starter && npm init && npm install -D vuepress && mkdir docs && echo '# Hello World' > blogs/README.md
```

按照提示进行安装即可成功安装最基础的文档系统

再在 <code>package.json</code> 文件中添加一些 scripts 

``` json
{
  "scripts": {
    "dev": "vuepress dev blogs",
    "build": "vuepress build blogs"
  }
}
```

再执行：

``` sh
npm run dev
```

等成功执行后访问给出的地址，显示 Hello World 就是 Vuepress 安装成功。

#### 安装模版

执行安装模版命令：

``` sh
npm install vuepress-theme-reco
```

按照好后打开 <code>blogs</code> 文件夹，引用模版配置文件，配置站点标题等信息：

``` js
// .vuepress/config.js

module.exports = {
  title: '你的博客名称',
  description: '你的博客的简介'
  theme: 'reco' // 博客模版，'reco' 是推荐模版，也可改成别的
}
```

然后修改blogs文件夹里面的 <code>README.md</code> 文件为：

```
# 这是你的主页

---
home: true
bgImage: '/bg.png'
bgImageStyle: {
  height: '200px'
}
---
```

更多首页配置请查看 [模版文档-首页配置](https://vuepress-theme-reco.recoluan.com/views/1.x/home.html)

即可将模版安装成功

执行 <code>npm run build</code> 就可以将静态页面部署到 <code>docs/.vuepress/dist</code> 目录中

## 插件

### 1. 公告栏弹窗

[插件文档](https://vuepress-theme-reco.recoluan.com/views/plugins/bulletinPopover.html)

#### 安装

``` sh
npm install @vuepress-reco/vuepress-plugin-bulletin-popover
```

#### 使用

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

##### 标题

``` json
{
  type: 'title',
  content: '这里显示 h5 标题'
}
```

##### 文本

``` json
{
  type: 'text',
  content: '这里显示普通文本'
}
```

##### 图片

``` json
{
  type: 'image',
  src: '/rvcode_qq.png'
}
```

##### 按钮

``` json
{
  type: 'button',
  text: '打赏',
  link: '/donate'
}
```

##### 给 dom 添加样式

``` json
{
  type: 'title',
  content: '这里显示 h5 标题',
  style: 'text-aligin: center;'
}
```

#### 效果截图

<img src='https://vuepress-theme-reco.recoluan.com/assets/img/bulletin-popover.967ff934.png'>

### 2. 代码复制

[插件地址](https://github.com/znicholasbrown/vuepress-plugin-code-copy)

#### 安装

``` sh
npm install vuepress-plugin-code-copy
```

#### 使用

``` js
plugins: [['vuepress-plugin-code-copy', true]]
```

它会显示一个复制图标，也是最常用的代码复制插件。

### 3. 添加著作权信息

使用 vuepress-plugin-copyright可以禁用文字复制或者在复制时添加著作权信息。

[插件地址](https://vuepress-community.netlify.app/zh/plugins/copyright)

#### 安装

``` sh
npm install vuepress-plugin-copyright
```

#### 使用

``` js
plugins: [
  [
    'copyright',
    {
      noCopy: true, // 选中的文字将无法被复制
      authorName: '博客名称', // 复制后将出现著作权信息
      minLength: 40, // 如果长度超过  40 个字符
    },
  ]
]
```

### 4. 音乐

[插件地址](https://moefyit.github.io/moefy-vuepress/packages/meting.html)

#### 安装

``` sh
npm install vuepress-plugin-meting
```

#### 使用

``` js
plugins: [
 'meting',
   {
      metingApi,
      meting,
      aplayer,
      mobile,
    },
]
```

#### 效果

<Meting server="netease" type="song" mid="abcdefg" :lrc-type="3"/>

#### 其它音乐插件

[bgm player](https://vuepress-theme-reco.recoluan.com/views/plugins/bgmPlayer.html)

### 5. 看板娘

[插件地址](https://vuepress-theme-reco.recoluan.com/views/plugins/kanbanniang.html)

#### 安装

``` sh
npm install @vuepress-reco/vuepress-plugin-kan-ban-niang
```

#### 使用

``` js
plugins: [
  [
    '@vuepress-reco/vuepress-plugin-kan-ban-niang',
    {
      theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']
    }
  ]
]
```

#### 效果截图

<img src='https://vuepress-theme-reco.recoluan.com/assets/img/kanbannaing_1.9d4605aa.png'>

### 6. 光标效果

[插件文档](https://moefyit.github.io/moefy-vuepress/packages/cursor-effects.html)

#### 安装

``` sh
npm install vuepress-plugin-cursor-effects
```

#### 使用

``` js
plugins: [
  ['cursor-effects', {
    size: 2, // size of the particle, default: 2
    shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
    zIndex: 999999999, // z-index property of the canvas, default: 999999999
 }]
]
```

### 7. 动态标题

[插件文档](https://moefyit.github.io/moefy-vuepress/packages/dynamic-title.html)

#### 安装

``` sh
npm install vuepress-plugin-dynamic-title
```

#### 使用

``` js
plugins: [
  ['dynamic-title', {
     showIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
     showText: '客官欢迎回来~',
     hideIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
     hideText: '客官不要走嘛~',
     recoverTime: 2000,
 }]
]
```

### 8. 优化代码展示

#### 安装

``` sh
npm install @vuepress-reco/vuepress-plugin-extract-code
```

#### 使用

``` js
plugins: [
    '@vuepress-reco/extract-code'
  ]
```

#### 效果

<RecoDemo :collapse="true">
<template slot="code-js">
<pre>
plugins: {}
</pre>
</template>
<template slot="code-css">
<pre>
body {
  background-color: skyblue;
}
</pre>
</template>
</RecoDemo>

### 更多插件

1. [reco插件广场](https://vuepress-theme-reco.recoluan.com/views/other/recommend.html)

2. [VuePress 社区 插件](https://vuepress-community.netlify.app/zh/)

3. [官方插件](https://v1.vuepress.vuejs.org/zh/plugin/)

4. npm 搜 vuepress-plugin 关键字

5. github 搜 vuepress-plugin 关键字

## 总结

实际上使用 Vuepress 搭建博客也并不复杂，也可以把它放到 Github 中，更简单，也不需要手动执行代码实现更新文章。

也可以放在服务器中，设置一个每三小时执行一次的计划任务，这样也可以实现每三小时自动刷新的作用

插件繁多，可以扩展博客的功能

<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/vuepress-blog-beautify.html](https://blog.mojy.xyz/archives/2022/vuepress-blog-beautify.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
