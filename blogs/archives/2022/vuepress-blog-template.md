---
title: Vuepress博客美化之模版
date: 2022-06-03
categories:
 - 博客
tags:
 - 博客
 - 模版
 - 美化
---

## 序

我们做博客经常会使用像WordPress、typecho等程序，甚至也有人会使用像 [MX-space](https://github.com/mx-space) 个人空间这样的程序，但是对于我这种服务器渣渣的同学来说，它们非常复杂，而且也不会太稳定。但由于我之前使用过 Vuepress 文档系统，我认为我可以使用 Vuepress 进行优化实现博客的目的。

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
npm run docs:dev
```

等成功执行后访问给出的地址，显示 Hello World 就是 Vuepress 安装成功。
<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/vuepress-blog-template.html](https://blog.mojy.xyz/archives/2022/vuepress-blog-template.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
