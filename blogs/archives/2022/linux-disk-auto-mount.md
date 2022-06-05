---
title: Linux实现自动挂载
date: 2022-06-05
categories:
 - 折腾
tags:
 - Linux
 - 磁盘
 - 分享
---

## 序

Linux没有Windows那么好看的图形界面，也没有像Windows的磁盘管理工具，因此只能通过命令行进行挂载分区。但是我挂载完分区后，重启它并不会自动挂载，因此写下了这篇文章。

## 教程

1. 首先需要使用<code>lsblk</code>命令查看一下当前磁盘挂载情况：

2. 将没有进行格式化的磁盘进行分区、格式化操作。

使用下方代码创建sdb1分区

``` sh
sfdisk /dev/sdb
```

然后使用下方代码将分区格式化为ext4格式

``` sh
mkfs.ext4 /dev/sdb1
```

3. 新建一个目录作为挂载点

``` sh
mkdir /mnt/sdb1
```

4. 进行挂载

``` sh
mount /dev/sdb1 /mnt/sdb1
```

<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/linux-disk-auto-mount.html](https://blog.mojy.xyz/archives/2022/linux-disk-auto-mount.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
