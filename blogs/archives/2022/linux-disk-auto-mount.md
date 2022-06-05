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

### 1. 查看当前磁盘挂载情况

``` sh
sudo lsblk
```

### 2. 将没有进行格式化的磁盘进行分区、格式化操作

如果你已经格式化，可以直接跳到第三步

#### 使用图形化分区工具sfdisk创建sdb1分区

``` sh
sudo sfdisk /dev/sdb
```

#### 将分区格式化为ext4格式

``` sh
sudo mkfs.ext4 /dev/sdb1
```

### 3. 新建一个目录作为挂载点

``` sh
sudo mkdir /mnt/sdb1
```

### 4. 进行挂载

``` sh
sudo mount /dev/sdb1 /mnt/sdb1
```

### 5. 获取磁盘 UUID 并复制

#### 获取磁盘 UUID

``` sh
sudo blkid
```

#### 复制获取到的 UUID

### 6. 修改分区挂载标识文件

``` sh
sudo vim /etc/fstab
```

内容为：

```
UUID=[disk:uuid] /mnt/sdb1 ext4 defaults 0 0
```

::: tip
1. 请将<code>[disk:uuid]</code>修改为复制的uuid

2. <code>/mnt/sdb1</code>目录可以为其它目录，是第三步所创建的目录

3. 若你的磁盘不是<code>ext4</code>分区，也可以修改，例如改为：<code>ntfs、fat32、exfat等</code>
:::

重启后就会自动挂载

## 总结

Linux自动挂载磁盘很简单，但也会有一些问题。

::: danger 问题
1. 请保证磁盘可以正常链接

2. 磁盘出现问题请重启进入紧急模式注释掉<code>fstab</code>内第六步的挂载项

3. 若磁盘连接线松了等请尽快解决
:::

<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/linux-disk-auto-mount.html](https://blog.mojy.xyz/archives/2022/linux-disk-auto-mount.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
