---
title: Cloudreve 宝塔面板简易部署教程
date: 2022-06-04
categories:
 - 折腾
tags:
 - Cloudreve
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
sudo yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

根据提示进行安装即可

## 安装 依赖

安装好宝塔面板后，登录面板。

打开面板左侧软件商店，依次安装 Nginx (随便哪个版本都行)，MySQL (5.7以上版本)，phpmyadmin (随便哪个版本都行)，PHP 7.2。

## 创建数据库

打开面板左侧数据库，点击添加数据库，数据库名填写<code>Cloudreve</code>，其它信息不用管；点击提交即可创建数据库。

## 安装 aria2

### 安装

``` sh
sudo yum install -y aria2
```

### 创建配置文件

``` sh
sudo mkdir /etc/aria2
sudo chown www /etc/aria2 -R

touch /etc/aria2/aria2.conf
touch /etc/aria2/aria2.session
```

### 编辑配置文件

在文件管理中打开<code>/etc/aria2/aria2.conf</code>文件，没有可以创建一个。

内容为：

```
#设置下载目录(这是缺省值，Cloudreve里面设置的和它不应该一样)
dir=/www/Downloads

#打开rpc的目的是为了给web管理端用
enable-rpc=true
rpc-allow-origin-all=true
rpc-listen-all=true
rpc-listen-port=6800
#断点续传
continue=true
input-file=/etc/aria2/aria2.session
save-session=/etc/aria2/aria2.session

#最大同时下载任务数
max-concurrent-downloads=40
save-session-interval=120

# Http/FTP 相关
connect-timeout=120
#lowest-speed-limit=10K
#同服务器连接数
max-connection-per-server=10
#max-file-not-found=2
#最小文件分片大小, 下载线程数上限取决于能分出多少片, 对于小文件重要
min-split-size=20M

#单文件最大线程数, 路由建议值: 5
split=15
check-certificate=false
#http-no-cache=true
```

### 配置服务

打开<code>/usr/lib/systemd/system/</code>目录创建<code>aria2.service</code>文件

内容如下：

```
[Unit]
Description=Aria2 Service
After=syslog.target network.target

[Service]
Type=simple
User=www
ExecStart=/usr/bin/aria2c --enable-rpc --rpc-listen-all --rpc-allow-origin-all --save-session /etc/aria2/aria2.session --input-file /etc/aria2/aria2.session --conf-path=/etc/aria2/aria2.conf
Restart=always

[Install]
WantedBy=multi-user.target
```

## 创建网站

在<strong>网站</strong>选项中点击<strong>添加站点</strong>，域名为<strong>Cloudreve.bt</strong>，备注<strong>Cloudreve</strong>其它的选项默认即可。

## 安装 Cloudreve

### 创建工作文件夹

``` sh
mkdir /www/cloudreve
```

### 上次&解压

将下载好的发行版文件上传到工作文件夹中，然后执行以下内容进行解压

``` sh
cd /www/cloudreve
tar -xvf cloudreve_3.5.3_linux_amd64.tar.gz
```

## 首次运行测试

``` sh
sudo chmod +x ./cloudreve
./cloudreve
```

## 修改配置文件

打开工作文件夹，打开<code>conf.ini</code>文件

在文件最后添加：

```
[Database]
; 数据库类型，目前支持 sqlite | mysql
Type = mysql
; MySQL 端口
Port = 3306
; 用户名
User = cloudreve
; 密码
Password = [mysql_db_passwd]
; 数据库地址
Host = 127.0.0.1
; 数据库名称
Name = cloudreve
; 数据表前缀
TablePrefix = cr_
```

<ins>上面用'[mysql_db_passwd]'替代MySQL的密码，使用前需先复制数据库密码，粘贴到这里即可。</ins>

删除无用的sqlite生成的cloudreve.db

## 再次进行测试

``` sh
./cloudreve
```

首次运行会打印监听端口、用户名和密码，如果PHPmyadmin内出现数据表，说明配置文件已经生效，用浏览器登录测试，没问题修改你的管理员用户名密码，进行下一步。

需要注意的是这次的用户名和密码要牢记

## 配置服务

打开<code>/usr/lib/systemd/system/</code>目录创建<code>cloudreve.service</code>文件

内容如下：

```
[Unit]
Description=Cloudreve
Documentation=https://docs.cloudreve.org
After=network.target aria2.service
Wants=network.target aria2.service

[Service]
User=www
WorkingDirectory=/www/cloudreve
ExecStart=/www/cloudreve/cloudreve
Restart=on-abnormal
RestartSec=5s
KillMode=mixed

StandardOutput=null
StandardError=syslog

[Install]
WantedBy=multi-user.target
```

## 启动服务进行测试

``` sh
systemctl daemon-reload
systemctl start aria2
systemctl start cloudreve
```

## 设置反代

打开左侧<strong>网站</strong>，点击<strong>Cloudreve.bt</strong>，解析并绑定你的域名，点击<strong>反向代理</strong>，代理名称输入<code>Cloudreve</code>，目标url输入<strong>http://localhost:5212</strong>点击提交即可。

访问你的域名，登录用户名、密码，测试功能。

## 设置开机启动

``` sh
systemctl enable aria2
systemctl enable cloudreve
```

## 总结

以上就是对我本次部署过程的总结，后续参考手册https://docs.cloudreve.org/，进行设置优化就好了。

设置需要注意以下几点：

::: tip
1.站点信息 -> url一定要设置准确

2.’离线下载-->临时下载目录’填写<code>/www/Cloudreve/Downloads</code>

3.在’用户‘中修改的密码,一定要记住! *
:::

## 踩的一些坑

### 无法上传大文件

经过分析这个问题是nginx导致的，nginx上传文件控制了大小，修改宝塔的nginx设置，性能调整那里最大上传文件改为65536。即：最大可支持单文件64GB。这个可以根据实际需要进行设置。

### 不能获取gravatar头像

‘参数设置-->图像处理’中的Gravatar服务器地址中的<code>https://www.gravatar.com/</code>改成<code>http://gravatar.loli.net/</code>

<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/bt-cloudreve-deploy-course.html](https://blog.mojy.xyz/archives/2022/bt-cloudreve-deploy-course.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
