---
title: 从CentOS Linux 8平滑升级到CentOS Stream 8
date: 2022-04-30
categories:
 - 折腾
tags:
 - 系统
 - 升级
---

## 序

由于CentOS官方的问题(我不知道，也不敢问)，导致 CentOS Linux 8 于2021年底停止了支持，因此导致了我 Proxmox 安装的 CentOS Linux 8 容器无法正常进行更新，因此我将它升级到了 CentOS 8 Stream 滚动发行版，可以进行获取更新。

## 升级之前
由于停止了支持，导致无法正常进行更新，因此需要先修改镜像站到阿里云的过期源

首先进入 **/etc/yum.repos.d** 目录中删除所有的更新源(反正也不能用了)

你可以执行 **cd /etc/yum.repos.d** 然后再执行 **rm -rf *.repo** 删除所有镜像源

输入代码：

```shell
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
```

修改到新的镜像源，在 **/etc/yum.repos.d** 目录中出现 **CentOS-Base.repo** 文件后就可以进行下一步操作。

## 升级

升级的方式很简单，如下：

```shell
[root@centos ~]# dnf swap centos-linux-repos centos-stram-repos
[root@centos ~]# dnf distro-sync
```

执行第一段代码后按照提示进行安装

执行第二段代码后即可成功进行升级

## 验证

```shell
[root@centos ~]# cat /etc/centos-release
CentOS Stream release 8
```

这样，你就不用担心由于 CentOS 8 停止支持导致无法正常进行更新啦～
            
<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/centos-linux-8-to-centos-stream-8.html](https://blog.mojy.xyz/archives/2022/centos-linux-8-to-centos-stream-8.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">创作共用保留署名-非商业-禁止演绎4.0国际许可证</a>。 |
