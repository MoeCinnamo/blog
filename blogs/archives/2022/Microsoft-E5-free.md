---
title: 免费的 Microsoft E5 订阅申请及设置自动续订
date: 2022-06-26
categories:
 - 折腾
tags:
 - 免费
 - 分享
---

## 前言

Office365开发版E5是为开发人员提供的，是微软的官方活动，申请Office 365开发者计划可以获得为期3个月的免费Office365 E5。 而E5计划就包含了25个用于所有Office 365 应用的许可证(25 user licenses)。如果觉得正版office365贵的话，这就是免费获取正版Office的绝佳机会！

由于它只有120天的时长，所以也应设置好自动续订程序，而网上很多的大佬也制作出了自动续期的API，而我们可以通过调用这些API实现 E5 的自动续期功能。

::: tip
过程很麻烦，需要有一定的耐心。还有可能会出现很多错误。
:::

需要材料：一个microsoft账号，一定的耐心，科学上网，一个Github账号

## 申请E5账号

1. 进入 [Microsoft 365 开发人员计划](https://docs.microsoft.com/zh-cn/office/developer-program/microsoft-365-developer-program) <br>
<img src='https://s1.ax1x.com/2022/05/30/X1wDIK.jpg' alt='Microsoft 365开发人员计划文档'/>

2. 点击 <strong>加入 Microsoft 365 开发人员计划</strong> 下的 <strong>加入 Microsoft 365 开发人员计划</strong> 并打开科学上网<br>

3. 点击 Join now 按钮<br>
<img src='https://s1.ax1x.com/2022/05/30/X1w2Md.jpg' alt='Microsoft 365开发人员计划首页'/>

4. 填写信息（随便填）并成功创建沙盒

5. 进入 [Microsoft 365 admin center](https://admin.microsoft.com/) 管理用户，最多25个用户<br>
<img src='https://s1.ax1x.com/2022/05/30/X1BIgg.jpg' alt='Microsoft 365 admin center'/>

（使用 ”用户名@域.onmicrosoft.com” 进行登录）

5. 进入 [office](https://www.office.com/) 登录刚刚填的账号，打开onedrive，他会提示正在准备，到这里你就成功了（要等很久，最好过几个小时再看！）

6. 默认空间是1t，进入 [Onedrive-默认存储空间修改](https://admin.onedrive.com/#v=StorageSettings) ，登录账号->设置->存储限制->把1024改成5120(改成别的也行，看你需求)<ins>管理员账户默认是无限空间，自动续订推荐使用管理员用户</ins>

设置自动续期教程请到 [这里](https://blog.mojy.xyz/archives/2022/free-onedrive-e5-auto.html)

## 设置自动续期

::: tip
这里我们使用浅忆大佬制作的自动续期API实现
:::

### 1. 注册自己的api key

登录进入 [azure](https://portal.azure.com)  ，登录账号使用你的e5账户 ，就是以xxx.onmicrosoft.com开头的的账户。

然后搜索“Azure Active Directory”

#### 1) 打开 '管理-应用注册'

<img src='https://img.qyi.io/images/2021/03/15/image4a16f92abda6ef1f.png'>

#### 2) 点击 '新注册'按钮

<img src='https://img.qyi.io/images/2020/03/02/5Hwwm2M43k642e14d99337925c.png'>

名称随意取一个，但是最重要的是 “重定向 URI (可选)”，请填写为下列地址，不然程序收不到回调。

```
https://e5.qyi.io/outlook/auth2/receive
```

<strong>受支持的账户类型</strong>至少要选择<strong>任何组织目录(任何 Azure AD 目录 - 多租户)中的帐户</strong>，也可以选择<strong>任何组织目录(任何 Azure AD 目录 - 多租户)中的帐户和个人 Microsoft 账户(例如, Skype、Xbox)</strong>

#### 3) 点击注册

##### 应用程序(客户端)ID
<img src='https://img.qyi.io/images/2020/03/02/chrome_vS9GTJrEmLff410ed40e26b912.png'>

##### 创建客户端密码
<img src='https://img.qyi.io/images/2020/03/02/vFP2hwG0DJ82d229f4e1db3b8c.png'>

这里说明随便填，'客户端密码'由于微软修改了策略，导致已经没有了'从不'选项。请使用自定义日期功能，将时间改为 2 年。

保存好应用程序(客户端)ID和客户端密码的<strong>值</strong>(必须是<strong>值</strong>)，马上就会用到。

##### 配置api权限

<img src='https://img.qyi.io/images/2020/03/02/486QCsp5Lq88822506ae0778f5.png'>
<img src='https://img.qyi.io/images/2020/03/02/BAAxoWLsJCb8bdfc017e9e6ec0.png'>

勾选一下四个选项后，同时点击 <strong>代表XX授予管理员同意</strong>(我上一期所说的使用管理员账号登录就是这里)
<img src='https://img.qyi.io/images/2020/03/02/dLBbs5dPsQef092254dea7b423.png'>

这个时候api的配置就完成了

### 2. 为自动订阅程序添加 key 操作

#### 进入 https://e5.qyi.io/

这里只是授权登录，不会获取到敏感信息。

<img src='https://img.qyi.io/images/2021/02/07/MqFWUocRk2223d51a83136b771.png'>

#### 点击 Github图标

登录后进入主页面(这是因为作者前端没做好，不影响使用)

#### 点击 新建

名称随便输，描述不需要输入

<img src='https://img.qyi.io/images/2021/02/07/0jQdNo4H0F31e606962bf2ab82.png'>

#### 点击 配置

<img src='https://img.qyi.io/images/2021/02/07/sF0GV8RrIRcff9d79b888ae01e.png'>

##### 配置Key
填入前面记录的 应用程序(客户端)ID、客户端密码  
client_id ->应用程序(客户端)ID
client_secret->客户端密码

<img src='https://img.qyi.io/images/2021/02/07/chrome_cbGLsqIZ0W8f844d0522993632.png'>

点击<strong>下一步</strong>

##### 配置调用时间

调用时间一般 60 秒就可以

<img src='https://img.qyi.io/images/2021/02/07/chrome_utRYW7imVI3fc44c6428c5110c.png'>

点击<strong>下一步</strong>

##### 进行授权

点击<strong>代表组织同意</strong>再点击<strong>接受</strong>

<img src='https://img.qyi.io/images/2020/03/01/image5a04cd92d780d42f.png'>

此时会跳转回自动订阅程序

<img src='https://img.qyi.io/images/2021/02/07/image3132e5bf78456777.png'>

授权添加成功

虽然作者提倡用子账号登录，但是这会稍微麻烦一些。如果不担心隐私问题我推荐直接用主账号。子账号可能需要二次授权。

## 感谢

[浅忆](https://qyi.io)

## 总结

总体来说，申请是比较麻烦的，并且还要进行科学上网，不过能获得近乎无限(5*25)的存储空间还算不错啦！在设置自动续期时也有可能会因为网络问题无法登录。

<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: []() |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
