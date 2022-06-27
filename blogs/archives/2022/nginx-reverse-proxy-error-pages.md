---
title: Nginx自定义反向代理错误页
date: 2022-05-29
categories:
 - 折腾
tags:
 - Nginx
---

## 序

对于Nginx来说，反向代理的错误页自定义很麻烦，但对于我来说，我却轻而易举就做到了。

## 前期

我想要做一个云加速，使用Nginx作为反向代理，但是我却又想出现类似于 Cloudflare 的反向代理页面，我百度了半天也没有看到有这种教程，我好不容易找到说的又不清楚，所以我要给大家说清楚一些。

我使用的是宝塔面板做的服务器，但是这个修改 Nginx 的配置文件后没多长时间就容易被宝塔更新删掉了，并且我设置了有时候也不会生效。

## 设置教程

需要单独的站点进行设置，无法批量设置，这确实是个麻烦事，但这可以通过写脚本解决。

在第一个location的第五行添加:

```
proxy_intercept_errors on;
fastcgi_intercept_errors on;
```

在第一个location的最后一行添加:

```
error_page 502 /502.html;
error_page 504 /504.html;
error_page 520 /520.html;
error_page 521 /521.html;
error_page 522 /522.html;
error_page 523 /523.html;
error_page 524 /524.html;
```

然后在最后#PROXY-END/的前面依次添加

```
location ^~ /502.html {
root  /www/server/nginx/html/;
index 502.html;
}

location ^~ /504.html {
root  /www/server/nginx/html/;
index 504.html;
}

location ^~ /520.html {
root  /www/server/nginx/html/;
index 520.html;
}

location ^~ /521.html {
root  /www/server/nginx/html/;
index 521.html;
}

location ^~ /522.html {
root  /www/server/nginx/html/;
index 522.html;
}

location ^~ /523.html {
root  /www/server/nginx/html/;
index 523.html;
}

location ^~ /524.html {
root  /www/server/nginx/html/;
index 524.html;
}
```

重新开启反向代理即可生效

## 总结

只需要这样设置即可，这实际上不是什么难事，只是每个站点都要设置，比较麻烦些。

## 附件

[仿cloudflare的错误页面](https://pan.pgxitong.com/s/XjlSz)

<br>

| Copyright |
| :-----|
| 文章作者: <a href="mailto:abcd2890000456@126.com">玉桂喵</a> |
| 文章链接: [https://blog.mojy.xyz/archives/2022/nginx-reverse-proxy-error-pages.html](https://blog.mojy.xyz/archives/2022/nginx-reverse-proxy-error-pages.html) |
| 版权声明: 商业转载请联系站长获得授权，非商业转载请注明本文出处及文章链接，未经站长允许不得对文章文字内容进行修改演绎。本文采用[创作共用保留署名-非商业-禁止演绎4.0国际许可证](https://creativecommons.org/licenses/by-nc-nd/4.0/)。 |
