---
title: Demo
createTime: 2026/02/26 17:14:19
permalink: /note/
---

- [bar](./bar.md)
- [foo](./foo.md)

#### 2.fs文件系统模块

fs模块是官方提供的、用来操作文件的模块。它提供了一系列方法和属性，用来满足用户对文件的操作需求。

如果要使用fs模块来操作文件，则必须要先导入它语法如下：

```js
const fs = require('fs')
```

① fs.readFile() 读取指定文件中的内容语法格式如下

```js
fs.readFile(path[,options],callback)=>(文件路径的字符串，编码格式、回调函数)
```

②fs.writeFile() 向指定的文件中写入内容语法格式如下：

```js
fs.writeFile(file,data[,options],callback)=>(文件路径的字符串，要写入的内容默认utf-8、回调函数)
这个方法只能用来创建文件，不能创建路径
```

③fs 路径动态拼接问题 __dirname