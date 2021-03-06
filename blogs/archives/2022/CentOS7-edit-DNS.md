---
title: CentOS 7 修改系统DNS的问题
date: 2022-06-28
categories:
 - 折腾
tags:
 - Linux
 - 系统
---

## 序

有一天，我发现我的服务器因为某些原因，链接镜像源时能时不能，下载软件包的速度也时快时慢。甚至有的时候直接报错无法连接，在我使用 ping 命令时发现，ip延迟不高，但是有时就是无法解析域名。我心想，这可能是DNS的问题。

## 尝试修改

我熟练的按照下面的方法修改了DNS

<RecoDemo :collapse="true">
<template slot="code-shell">
<pre>
vim /etc/resolv.conf
</pre>
</template>
<template slot="code-conf">
<pre>
114.114.114.114
8.8.8.8
</pre>
</template>
</RecoDemo>

然后重启 NetWork Manager 服务。

我发现，它并没有用，我就奇怪了。平常都有用的啊？

后来网上一搜才知道，通过这种方式无法修改 CentOS 7 的DNS。

## 再次修改

我吸取了教训，原来它需要修改网卡配置文件。

<RecoDemo :collapse="true">
<template slot="code-shell">
<pre>
cd /etc/sysconfig/network-scripts
ls
我这边是 ifcfg-eth0 ，每台机器都不尽相同，选第一个
vi ifcfg-eth0
</pre>
</template>
<template slot="code-conf">
<pre>
在最后添加：
DNS1=114.114.114.114
DNS2=8.8.8.8
</pre>
</template>
</RecoDemo>

然后重启 NetWork Manager 服务即可

## 总结

一种方法不行，不妨可以试试另一种方法，会发现一片新天地哦！

<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/CentOS7-edit-DNS.html](https://blog.mojy.xyz/archives/2022/CentOS7-edit-DNS.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
