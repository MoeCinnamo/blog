---
title: Vuepress博客美化
date: 2022-06-03
categories:
 - 博客
tags:
 - 博客
 - 美化
---

## 序

做博客经常会使用像WordPress、typecho等程序，甚至也有人会使用像 [MX-space](https://github.com/mx-space) 个人空间这样的程序，但是对于我这种服务器渣渣的同学来说，它们非常复杂，而且也不会太稳定。但由于我之前使用过 Vuepress 文档系统，我认为我可以使用 Vuepress 进行优化实现博客的目的。为了丰富站点的功能，也可以直接使用一些现有的插件。

## 教程

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

## 总结

实际上使用 Vuepress 搭建博客也并不复杂，你也可以把它放到 Github 中，更简单，也不需要手动执行代码实现更新文章。

也可以放在服务器中，设置一个每三小时执行一次的计划任务，这样也可以实现每三小时自动刷新的作用

<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/vuepress-blog-template.html](https://blog.mojy.xyz/archives/2022/vuepress-blog-template.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
