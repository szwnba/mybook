# 如何获取到张小龙微信ID的神帖

这个分享偏技术向。

我两年半前发过一篇简单科普文，介绍了微信公众平台图文消息的链接组成

[解读微信公众平台图文消息的链接组成](https://mp.weixin.qq.com/s/laVLXBVG_qNWuCdoDk8AUg)

在这篇文章里，我没说的是：**biz这个参数，其实就是base64编码，经过base64解码之后能得到公众平台的原始ID， 那么这篇文章里还说了当时获取二维码的办法： \[**[**http://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&**](http://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&)biz=MzA5Njg3MjAzOA==\]\([http://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&\_\_biz=MzA5Njg3MjAzOA==](http://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzA5Njg3MjAzOA==)\)

改变size即可改变二维码的大小。

这个二维码获取的办法一直到一个月以前都是有效的，但是现在失效了，我认为跟我之前的分享有关系。

在之前，经过分析知道公众号的原始ID实际上就是数字，而微信个人账号的id为uin，经过base64解码之后原始ID也是数字， 在最开始，微信个人账号和公众账号的原始ID没有分开，那么这个用来获取公众号二维码的办法也可以同样用来获取微信个人账号二维码。

再经过简单的几次尝试\(用猜测的原始ID去base64编码得到biz，尝试用这个biz生成的二维码是否可以正常扫码\)可以知道：微信的个人账号的ID是从100001开始的，6位数，而qq是5位数，从10001开始。

尝试的结果： 100002: 张文瑞 100003: 刘乐君 （估计弃用了） 100004: Franklin 人在杭州 100005: 微信团队 ID：weixin 100006 ～ 1000011 位置都是广州的 1000011 是张小龙的微信 下面的就没有再尝试了。

我发现这个推导过程是在一年前，直到上个月的一次分享才顺带介绍了这件事，然后放出了通过这种办法推导出的张小龙的个人微信号二维码， 现在如果再去扫码会出现下面图片里的提示。

而且[http://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&\_\_biz=MzA5Njg3MjAzOA==](http://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzA5Njg3MjAzOA==) 这种办法获取微信公众号二维码也获取不到了，返回： { ret: -2, errmsg: “get qrcode failed”, cookie\_count: 1 } 需要加上公众平台文章参数才可以获取： [https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&\_\_biz=MzA5Njg3MjAzOA==&mid=201308885&idx=1&sn=b4509bb0be258a0280a19fdd0b692ed6&send\_time=](https://mp.weixin.qq.com/mp/qrcode?scene=10000004&size=102&__biz=MzA5Njg3MjAzOA==&mid=201308885&idx=1&sn=b4509bb0be258a0280a19fdd0b692ed6&send_time=)

另外如果你用张文瑞去Google搜索，会搜到几篇不错的微信相关架构的分享文章，建议阅读。

**评论：**

亦仁：这是一篇分享如何获取到张小龙微信ID的神帖

刘泽君 回复 亦仁：请问圈子里的内容可以截图分享到朋友圈么？

亦仁 回复 刘泽君：直接有分享链接功能，不要截图

[加入「生财有术」](https://www.ilangcai.com/jiaru/)

交流合作，请加微信：sige3638

