---
title: Cloudreve 宝塔面板简易部署教程
date: 2022-06-04
categories:
 - 折腾
tags:
 - Cloudreve
 - 教程
 - 分享
---
## 序

我有很多文件需要存储，家里的硬盘也有很大的空间，我想找一个开源的网盘程序使用。因此我就在 GitHub 上面找到了 Cloudreve 这个网盘程序，想要制作一个共享网盘。

## 介绍

### 什么是cloudreve

[cloudreve](https://github.com/cloudreve/Cloudreve)是[github](https://github.com)上开源的网盘系统。

### 官方网站

[https://cloudreve.org/](https://cloudreve.org/)

### 网盘源代码

[https://github.com/cloudreve/Cloudreve](https://github.com/cloudreve/Cloudreve)

<hr>

## 部署

环境：CentOS 7

版本：Cloudreve 3.5.3

## 下载

[Cloudreve-3.5.3](https://github.com/cloudreve/Cloudreve/releases/tag/3.5.3)

<ins>你应该按照你的环境来下载，一般的x86架构Linux电脑下载 <strong>cloudreve_3.5.3_linux_amd64.tar.gz</strong> ，Windows电脑下载 <strong>cloudreve_3.5.3_windows_amd64.zip</strong>，而不应该下载 <strong>Source code</strong>。</ins>

## 安装宝塔面板

使用工具连接服务器的ssh终端，执行以下代码：

``` sh
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

根据提示进行安装即可

## 安装 依赖

安装好宝塔面板后，登录面板。

打开面板左侧软件商店，依次安装 Nginx (随便哪个版本都行)，MySQL (5.7以上版本)，phpmyadmin (随便哪个版本都行)，PHP 7.2。

## 创建数据库

打开面板左侧数据库，点击添加数据库，数据库名填写<code>Cloudreve</code>，其它信息不用管；点击提交即可创建数据库。

## 安装 aria2

执行代码：

``` sh
yum install -y aria2
```

<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/bt-cloudreve-deploy-course.html](https://blog.mojy.xyz/archives/2022/bt-cloudreve-deploy-course.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
