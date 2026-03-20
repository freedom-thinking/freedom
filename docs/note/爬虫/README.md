---
title: 爬虫
createTime: 2026/03/18 19:50:02
permalink: /note/爬虫/
---

## 一、什么是互联网爬虫？

如果我们八互联网比作一张大的蜘蛛网，那一台计算机上的数据便是蜘蛛网上是一个猎物，而爬虫程序就是一只小小的蜘蛛，沿着蜘蛛网抓取自己想要的数据。实际上就是使用程序模拟浏览器向服务器发送请求，获取响应信息。

## 二、爬虫的核心？

1.爬取网页：爬取整个网页 包含了网页中所有的内容

2.解析数据：将网页中你得到的数据 进行解析

3.难点：爬虫和反爬虫之间的博弈

## 三、爬虫的用途

- 数据分析/人工数据集
- 社交软件冷启动
- 舆情监控
- 竞争对手监控

## 四、反爬分类

1. 通用爬虫

   ​	实例

   ​			百度、360、google、sougou等搜索引擎-----伯乐在线

   ​	功能

   ​			访问网页->抓取程序->数据处理->提供检索服务

   ​	robots协议

   ​			一个约定俗称的协议，添加robots.txt文件，来说明本网站哪些内容不可以被抓取，起不			到限制作用，自己写的爬虫无需遵守

   ​		网站排名(SEO)

   ​			1.格局paperank算法值进行排名( 参考个网站流量、点击率等指标)

   ​			2.百度竞价排名

   ​		缺点

   ​			1.抓取的数据大多是无用的

   ​			2.不能根据用户的需求来精准获取数据

2. 聚焦爬虫

   ​		功能

   ​				根据需求，实现爬虫程序，抓取需要的数据

   ​		设计思路

   ​				1.确定要爬取的url

   ​						如何获取url

   ​				2.模拟浏览器通过http协议访问url，获取服务器返回html代码

   ​						如何访问

   ​				3.解析html字符串（根据一定规则提取需要的数据）

   ​						如何解析

## 五、反爬手段

1. User-Agent

   User Agent 中文名为用户代理，简称UA，它是一个特殊字符串投，使得服务器能够识别客户使用的操作西永及版本、CPU类型、浏览器渲染引擎、浏览器语言、浏览器插件等。

2. 代理IP

   西次代理

   快代理

   说明是高匿名、匿名和透明代理？它们有说明区别？

   ​		1.使用透明代理，对方服务器可以知道你使用了代理，并且也知道你的真实IP

   ​		2.使用匿名代理，对方服务器知道你使用了代理，但不知道你的真实IP

   ​		3.使用高匿名代理，对方服务器不知道你使用了代理，更不知道你的真实IP

3. 验证码访问

   打码平台

   超级老鹰

4. 动态加载网页 网站返回的是JS数据，并部署网页的真实数据

   selenium驱动真实的浏览器发送请求

5. 数据加密

   分析js代码

## 六、urlib库使用

```python
urllib.request.urlopen() 模拟浏览器向服务器发送请求
response 服务器返回的数据
response的数据类型是HttpResponse
字节‐‐>字符串
解码decode
字符串‐‐>字节
编码encode
read() 字节形式读取二进制 扩展：rede(5)返回前几个字节
readline() 读取一行
readlines() 一行一行读取 直至结束
getcode() 获取状态码
geturl() 获取url
getheaders() 获取headers
urllib.request.urlretrieve()
请求网页
请求图片
请求视频
```

## 七、请求对象的定制

UA介绍：User Agent中文名为用户代理，简称 UA，它是一个特殊字符串头，使得服务器能够识别客户使用的操作系统

及版本、CPU 类型、浏览器及版本。浏览器内核、浏览器渲染引擎、浏览器语言、浏览器插件等

```python
语法：request = urllib.request.Request()
```

## 八、编解码

### 1.编码集的演变

由于计算机是美国人发明的，因此，最早只有127个字符被编码到计算机里，也就是大小写英文字母、数字和一些符号，

这个编码表被称为ASCII编码，比如大写字母A的编码是65，小写字母z的编码是122。

但是要处理中文显然一个字节是不够的，至少需要两个字节，而且还不能和ASCII编码冲突，

所以，中国制定了GB2312编码，用来把中文编进去。

你可以想得到的是，全世界有上百种语言，日本把日文编到Shift_JIS里，韩国把韩文编到Euc‐kr里，

各国有各国的标准，就会不可避免地出现冲突，结果就是，在多语言混合的文本中，显示出来会有乱码。

因此，Unicode应运而生。Unicode把所有语言都统一到一套编码里，这样就不会再有乱码问题了。

Unicode标准也在不断发展，但最常用的是用两个字节表示一个字符（如果要用到非常偏僻的字符，就需要4个字节）。

现代操作系统和大多数编程语言都直接支持Unicode。

2.get请求方式：urllib.parse.quote（）

```python
import urllib.request
import urllib.parse
url = 'https://www.baidu.com/s?wd='
headers = {
'User‐Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'
}
url = url + urllib.parse.quote('小野')
request = urllib.request.Request(url=url,headers=headers)
response = urllib.request.urlopen(request)
print(response.read().decode('utf‐8'))
```

3.get请求方式：urllib.parse.urlencode（）

```python
import urllib.request
import urllib.parse
url = 'http://www.baidu.com/s?'
data = {
'name':'小刚',
'sex':'男',
}
data = urllib.parse.urlencode(data)
url = url + data
print(url)
headers = {
'User‐Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like
Gecko) Chrome/74.0.3729.169 Safari/537.36'
}
request = urllib.request.Request(url=url,headers=headers)
response = urllib.request.urlopen(request)
print(response.read().decode('utf‐8'))
```

4.post请求方式

```python
import urllib.request
import urllib.parse
url = 'https://fanyi.baidu.com/sug'
headers = {
'user‐agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like
Gecko) Chrome/74.0.3729.169 Safari/537.36'
}
keyword = input('请输入您要查询的单词')
data = {
'kw':keyword
}
data = urllib.parse.urlencode(data).encode('utf‐8')
request = urllib.request.Request(url=url,headers=headers,data=data)
response = urllib.request.urlopen(request)
print(response.read().decode('utf‐8'))
```

## 九、ajax的get请求

## 十、ajax的post请求

## 十一、复杂get

## 十二、URLError/HTTPError

## 十三、cookie登录

## 十四、Handler处理器

## 十五、代理服务器

## 十六、cookie库