---
title: 【分享】只需4步，爱快路由轻松访问github
date: 2022-04-25
categories:
 - 分享
tags:
 - 分享
 - iKuai
---

## 序

Github是一个不错的开发者平台，但是由于中国网关管理日渐严格，因此导致github出现了很多的问题，比如图裂、访问慢等，我们为了解决这些问题，可谓是费尽心思。

最后，我好不容易找到了 <a href="https://github.com/521xueweihan/GitHub520" target="_blank">GitHub520</a> 这一个不错的项目，可以让大家完全能通过修改hosts访问Github；但是我发现，我家使用的路由器是爱快路由，我也不想让每个设备都修改一遍hosts达到上github的目的(主要是麻烦)。

我采用了这种方法进行设置，为了让大家方便，我写了这篇文章。

## 言

### 前期

我开始四处寻找hosts设置，但是发现，爱快路由系统是没有hosts选项的；但是我找到了dns反向代理功能，我想，这个功能应该也和hosts差不多才对吧

不过，我理解错了，我尝试导入hosts文件，但是失败了，说明和hosts并不同，然后我就需要手动进行设置。

### 设置教程

<ol>
 <li><p>点击左边栏网络设置 -> DHCP设置 -> DHCP服务端，把所有服务接口的默认DNS和网关都改成爱快路由(如果只有一个ip分配给爱快路由，DNS可以填写两个一样的或只填写第一个)。<img src="https://s1.ax1x.com/2022/04/25/LIogHO.jpg" alt="DHCP设置"></p></li>
 <li><p>点击网络设置 -> DNS设置 -> DNS设置，开启DNS加速服务，DNS加速模式为：”代理模式(UDP)”并开启强制客户端DNS代理。<img src="https://s1.ax1x.com/2022/04/25/LII2fs.jpg" alt="DNS设置"></p></li>
 <li><p>下滑找到DNS代理，挨个添加<a href="https://github.com/521xueweihan/GitHub520" target="_blank">GitHub520</a>的Hosts即可</p></li>
 <li>为了简化过程，我特意新建了文件，大家只需下载这个文件后进行简单的设置即可使用。<a href="https://github.com/521xueweihan/GitHub520/files/8495022/iKuai-github-dns-update-by-2022-04-11-11%2B31%2B10.txt" target="_blank">有点老的文件</a></li>
</ol>
<p>由于GitHub服务器在国内并不稳定，我制作出了Out-Local-Hosts项目，目前正在开发中，大家敬请期待。</p>


| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: <a href="https://blog.mojy.xyz/archives/2022/share-ikuai-to-visit-github.html">https://blog.mojy.xyz/archives/2022/share-ikuai-to-visit-github.html</a> |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">创作共用保留署名-非商业-禁止演绎4.0国际许可证</a>。 |
