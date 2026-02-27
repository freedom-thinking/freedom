---
title: README.md
createTime: 2026/02/27 16:04:11
permalink: /note/Node.js/
---
#### 思考：

1、浏览器中JavaScript的组成部分

JavaScript 核心组成部分
**├─ ECMAScript (语言基础)**
│  ├─ 语法规范
│  │  ├─ 变量声明 (var/let/const)
│  │  ├─ 数据类型 (Number/String/Boolean/Object等)
│  │  ├─ 运算符与表达式
│  │  └─ 控制结构 (if/for/switch等)
│  ├─ 核心对象
│  │  ├─ Array / Object / Date / Math
│  │  └─ JSON / Promise / Proxy
│  ├─ 函数与作用域
│  │  ├─ 函数声明与表达式
│  │  ├─ 闭包与高阶函数
│  │  └─ 箭头函数
│  └─ 异步编程
│     ├─ Callback
│     ├─ Promise
│     └─ Async/Await
├─ DOM (文档对象模型)
│  ├─ 节点操作
│  │  ├─ getElementById/querySelector
│  │  ├─ createElement/appendChild
│  │  └─ cloneNode/removeNode
│  ├─ 事件处理
│  │  ├─ addEventListener
│  │  ├─ 事件冒泡/捕获
│  │  └─ 事件委托
│  └─ 样式控制
│     ├─ style属性操作
│     ├─ classList API
│     └─ getComputedStyle
├─ BOM (浏览器对象模型)
│  ├─ Window对象
│  │  ├─ 定时器 (setTimeout/setInterval)
│  │  ├─ 屏幕信息 (screenX/screenY)
│  │  └─ 历史记录 (history API)
│  ├─ Navigator对象
│  │  └─ 浏览器信息检测
│  ├─ Location对象
│  │  └─ URL操作 (hash/search)
│  └─ XMLHttpRequest
│     └─ 传统AJAX通信
├─ **Web API (现代扩展)**
│  ├─ Fetch API
│  │  └─ 基于Promise的HTTP请求
│  ├─ Canvas/WebGL
│  │  └─ 图形渲染
│  ├─ Web Storage
│  │  ├─ localStorage/sessionStorage
│  │  └─ 存储机制
│  ├─ Web Workers
│  │  └─ 多线程处理
│  └─ Geolocation API
│     └─ 地理位置获取
└─ 开发环境相关
   ├─ 调试工具
   │  ├─ Console API
   │  └─ Debugger语句
   ├─ 性能优化
   │  ├─ 事件循环 (Event Loop)
   │  └─ 内存管理
   └─ 安全机制
      ├─ 同源策略
      └─ CORS跨域

2、为什么JavaScript可以在浏览器中被执行？

因为浏览器中有JavaScript解析引擎。不同的浏览器使用的是不同的引擎。Chrome浏览器V8解析引擎新能最好

3、为什么JavaScript可以操作DOM和BOM

浏览器中有很多内置的API比如：DOM API、BOM API、Ajax API

使用js代码可以调用这些API从而操作

4、浏览器中的JavaScript运行环境

运行环境是指代码正常运行所需的必要环境

Chrome浏览器运行环境：V8解析引擎、内置API函数

5、JavaScript能否做后端开发？

Java、Python、PHP是最长用于后端开发的语言

答案是可以的，只不过要借助node.js来开发

#### 1.什么是Node.js?

Node.js is a Javascript runtime built on Chrome‘s V8 Javascript engine.

Node.js是一个基于Chrome V8引擎的JavaScript运行环境

注意：浏览器是JavaScript的前端运行环境，Node.js是JavaScript的后端运行环境

##### node 可以做什么？

① 基于Express框架，可以快速构建Web应用

② 基于Electron框架，可以构建跨平台桌面应用

③ 基于restify框架，可以快速构建API接口项目

④ 读写和操作数据库、创建使用的命令行工具辅助前端开发、etc…

##### 如何在Node.js环境中执行JavaScript代码？

① 打开终端

② 输入 node 要执行的js文件的路径

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

```
在使用fs模块操作文件时，如果提供的操作路径是以./或../开头的相对路径时，很容易出现动态路径拼接错误的问题
原因：代码在运行时，会以node命令执行所在目录，来动态拼接出被操作文件的完整路径。
解决方案：直接使用完整的路径，不要使用相对路径，从而防止路径动态拼接问题,但是这种办法移植性非常差，而且不利于维护
```

​	最好的方法是使用__dirname表示当前文件所处的目录

#### 3.path路径模块

path模块是Node.js官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径处理的需求。

导入语法如下：

```javascript
const path = require('path')
```

①path.join() 把多个路径片段拼接为完整的路径字符串，语法格式如下

```javascript
path.join([...paths]) ...path是字符串格式的路径片段序列，返回值为string 
```

注意：凡是涉及到路径拼接操作，都要用path.join()方法来进行处理。不要直接使用+进行字符串的拼接

②path.baseename()获取路径中的文件名,语法格式如下：

```
path.basename(path[,ext]) path表示一个路径字符串 ext表示文件拓展名 string表示路径中的最后一部分
```

③path.extname()获取路径的文件拓展名,语法格式如下

```js
path.extname(path) path是必选参数，表示路径的字符串 返回值为文件拓展名字符串
```

#### 4.http模块

http模块是用来创建web服务器的模块。通过http模块提供的http.createServer()方法，就能方便的把一台普通的电脑变成一台Web服务器，从而对外提供Web资源服务。

什么是客户端，什么是服务器？

在网络节点中，负责消费资源的电脑，叫客户端；负责对外提供网络资源的电脑，叫做服务器。

导入语法如下：

```javascript
const http = require('http')
```

服务器和普通电脑区别在于，服务器上安装了web服务器软件，例如：llS、Apache等。通过安装这些服务器软件，就能把一台普通的电脑变成一台web服务器。

##### **IP地址**

IP地址就是互联网上每台计算机的唯一地址，因此IP地址具有唯一性。只有在知道对方IP地址的前提下，才能与对应的电脑之间进行数据通信。

IP地址的格式：通常用点分十进制表示成(a.b.c.d)的形式，其中a,b,c,d都是0~255之间的十进制整数

注意：互联网中的Web服务器，都有自己的IP地址。

##### **域名和域名服务器**

IP地址是一长串数字，不直观，不便于记忆，于是人们发明了另一套字符型的地址方案，即所谓的域名(Domain Name)地址

IP地址和域名是一一对应的关系，这份关系存放在一种叫做域名服务器(DNS Domain name server)的电脑中。使用者只需要通过好记忆的域名访问对应的服务器即可，对应的转换工作由域名服务器实现，因此，域名服务器就是提供IP地址和域名之间的转换服务的服务器。

##### **端口号**

每个web服务都对应唯一的端口号。只有80端口可以被省略

①创建最基本的web服务器

```javascript
//1、导入http模块
const http = require('http')
//2、创建web服务器实例
const server = http.createServer()
//3、为服务器绑定request事件，监听客户端的请求
server.on('request',(req,res)=>{
    //只要有客户端来请求我们自己的服务器，就会触发 request 事件 ，从而调用这个事件处理函数
    console.log('Someone vist our web serve.')
})
//4、启动服务器 server.listen(端口号，cb回调)
server.listen(80,() =>{
    console.log('http server running at http://127.0.0.1')
})
```

②req请求对象

只要服务器接收到了客户端的请求，就会调用通过server.on()为服务器绑定的request事件处理函数

如果想在事件处理函数中，访问与客户端相关的数据或属性，可以使用如下的方式：

```javascript
server.on('request',(req)=>{
//req 是请求对象，它包含了与客户端相关的数据和属性。例如：
//req.url是客户端的URL地址
//req.method 是客户端 method 请求类型
const str = 'Your request url is ${req.url},and request methods is ${req.method}'
console.log(str)
})
```

③res响应对象

在服务器的request事件处理函数中，如果想访问与服务器相关的数据或属性，可以使用如下的方式：

```javascript
server.on('request',(req,res)=>{
// res是响应对象，它包含了与服务器相关的数据和属性，例如：
// 要发送到客户端的字符
const str = 'Your request url is ${req.url},and request methods is ${req.method}'
// res.end()向客户端发送指定内容，并结束这次请求处理过程
})
```

⑤解决中文乱码问题

当调用res.end()方法，向客户端发送中文内容时，会出现乱码问题，此时，需要手动设置内容的编码格式：

必须要设置响应头content-Type ，告诉浏览器用什么编码来解析内容

```javascript
server.on('request',(req,res)=>{
// 发送的内容包含中文
const str = '你的的url地址是 ${req.url},请求的方法类型是 ${req.method}'
res.setHeader('Content-Type','text/html; charset=utf-8')
// res.end()
})
```

⑥根据不同的url响应不同的html内容

```
1、获取请求的url地址

2、设置默认的响应内容为404 Not found

3、判断用户请求的是否为/或/index.html首页

4、判断用户请求的是否为/about.html页面

5、设置Content-Type响应头，从而防止中文乱码

6、使用res.end()把内容响应给客户端
```

#### 5.模块化

模块化是指解决一个复杂问题时，自定向下逐层把系统划分成若干模块的过程。对于整个系统来说，模块是可组合、分解和更换的单元。

好处：

① 提高了代码的复用性

② 提高了代码的可维护性

③ 可以实现按需加载

Node.js根据模块来源不同分为3大类，分别是：

- 内置模块（官方提供的）
- 自定义模块（用户自己创建的js文件）
- 第三方模块（由第三方开发出来的模块，需要提前下载）

##### 加载模块

使用强大的require()方法，可以加载需要的内置模块、用户自定义模块、第三方模块进行使用。

```javascript
// 1.加载内置的fs模块
const fs = require('fs')
// 2.加载用户的自定义模块 要给出完整路径 可以省略后缀js
const custom = require('./custom.js')
// 3.加载第三方模块
const coment = require('coment')
```

##### 模块作用域

和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问显示，叫做模块作用域。

好处：

- 防止全局变量污染问题

##### 向外共享模块作用域中的成员

1.module 对象

在每个.js自定义模块中都有一个module对象，它里面储存了和当前模块有关的信息。其中就有个属性叫做exports，默认为空对象。

2.module.exports

在自定义模块中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用。

外界用require()方法导入自定义模块时，得到的就是module.exports所指对象。

3.exports 对象

由于module.exports 单词写起来比较复杂，为了简化向外共享成员的代码，Node提供了exports对象。默认情况下，exports和module.exports指向同一个对象。最终共享的结果，还是以module.exports指向的对象为准。

4.exports和module.exports使用误区

5.CommonJS模块化规范

CommonJs规定了模块的特性和各模块之间如何相互依赖

CommonJS规定：

① 每个模块内部，module 变量代表当前模块

② module 变量是一个对象，它的exports属性(即module.exports)是对外的接口

③ 加载某个模块，其实是加载该模块的module.exports属性。require() 方法用于加载模块

#### 6.npm与包

包：Node.js中的第三方模块又叫做包

包的来源：由第三方个人或团队开发出来的，免费供所有人使用

为什么需要包：仅用内置的API，开发效率很低。使用第三方包，提供了更高级、更方面的API，极大的提高了开发效率。

从哪里下载包：国外有一家IT公司，叫做npm，inc。这家公司有一个非常著名的网站：https://www.npmjs.com/，它是全球最大的包共享平台，你可以从这个网站上搜索到任何你需要的包，只要你有足够的耐心。npm公司提供了一个地址为：https://registry.npmjs.org/的服务器，来对外共享所有的包。我们可以从这个服务器上下载自己所需要的包。

注意：

- 从https://www.npmjs.com/网站上搜索自己所需要的包
- 从https://registry.npmjs.org/服务器上下载自己需要的包

##### **如何下载包：**

npm,Inc公司提供了一个包管理工具，我们可以使用这个包管理工具，从https://registry.npmjs.org/服务器把需要的包下载到本地使用

这个包管理工具的名字叫做Node Package Manager 简称npm包管理工具，这个包管理工具随着Node.js的安装包一起被安装到了用户的电脑上

```
npm isntall 包的完整名称
默认下载最新版本通过@+版本号可以下载指定版本包
```

##### **包的语义化版本规范：**

包的版本号是以“点分十进制”形式进行定义的，总共有三位数字，例如2.24.0

第1位数字：大版本

第2位数字：功能版本

第3位数字：Bug修复版本

##### **包管理配置文件：**

在项目根目录中，必须提供一个叫做package.json的包管理配置文件。用来记录与项目有关的一些配置信息。例如：

- 项目的名称、版本号、描述
- 项目都用到了哪些包
- 哪些包只在开发期间会用到
- 哪些包在开发和部署时都需要用到

##### **多人协作问题**

为了方便传输项目，我们在上传时需要把node_modules文件夹给删除掉。需要这个文件夹添加到.gitignore忽略文件中上传到github中去。

快速创建package.json 注意：只能在英文目录中运行，且目录中不能有空格

```powershell
npm init -y
```

##### **一次性下载所有包:**

```
npm install
```

##### **卸载包**

```
npm uninstall 包名
```

##### **devDependencies节点**

如果某些包只在项目开发阶段会用到，在项目上线之后不会用到，则建议把这些包记录到devDependencis节点中。

与之对应的，如果某些包在开发和项目上线之后都需要用到，则建议把这些包记录到denpendencies中

```
//安装指定包，记录到devDependenceies节点中
npm i 包名 -D
//注意：上述命令是简写形式，等价于下面完整的写法
npm install 包名 --save-dev
```

##### **解决下包速度慢问题**

使用npm下载包的时候，默认是从国外的服务器进行下载，此时，网络数据的传输要经过漫长的海底光缆，因此下包速度会慢

如何解决：使用淘宝NPM镜像服务器

镜像(Mirroring)：是一种文件存储形式，一个磁盘上的数据在另外一个磁盘上存在一个完全相同的副本即为镜像

切换npm的下包镜像源

```
// 查看当前的下包镜像源
npm config get registry
// 将下包的镜像源切换为淘宝镜像源
npm config set registry=https://registry.npm.taobao.org/
// 检查镜像源是否下载成功
npm config get registry
```

##### **nrm**

为了更方便的切换下包的镜像源，我们可以安装nrm这个小工具，利用nrm提供的终端命令，可以快速查看和切换下包的镜像源。

```
// 通过npm包管理器，将nrm安装为全局可利用工具
npm i nrm -g
// 查看所有可用的镜像源
nrm ls
// 将下包的镜像切换为taobao 镜像
nrm use tabao
```

##### **包的分类**

1. ###### 项目包

   那些被安装到项目的node_modules 目录中的包，都是项目包。

   分别是

   - 开发依赖包：只在开发期间会用到的包
   - 核心依赖包：在开发期间和项目上限之后都会用到

2. ###### 全局包

   在执行npm install 命令时，如果提供了-g参数，则会把包安装为全局包。

   全局包会被安装到C:\Users\用户目录\AppData\Roaming\npm\node_modules目录下。

   注意：只有工具性质的包，才有全局安装的必要性。因为它们提供了好用的终端命令。可以根据官方网站的提示进行下载。

3. ###### i5ting_toc

   i5ting_toc是一个可以把md文档转为html页面的小工具，使用步骤如下：

   ```
   // 将i5ting_toc安装为全局包
   npm install -g i5ting_toc
   // 调用i5ting_toc,轻松实现 md 转 和她们领导功
   i5ting_toc -f 要转换的md文件路径 -o
   ```

4. ###### 规范的包结构

   一个规范的包，它的组成结构，必须符合以下3点要求：

   ① 包必须以单独的目录而存在

   ② 包的顶级目录下必须包含package.json这个包管理配置文件

   ③ package.json 中必须包含name,version,main这三个属性，分别代表包的名字、版本号、包的入口。

   关于更多的约束可以参考https://yarnpkg.com/zh-Hans/docs/package-json

5. ###### 开发属于自己的包

   ① 初始化包的基本结构：创建包的根目录、根目录包括三个文件package.json(包管理配置文件)、index.js(包的入口文件)、README.md(包的说明文档)

   ```json
   {
       "name":"包的名字",
       "version":"版本号",
       "main":"入口文件默认index.js",
       "description":"包描述",
       "keywords":["搜索的关键字","e1","e2"],
       "license":"所遵顼的开源许可协议默认ISC"
   }
   ```

   ② 将不同的功能进行模块化拆分

   ③ 编写包的说明文档 README.md具体写什么内容没有强制性的要求，只要能够清晰地把包的作用、用法、注意事项描述清楚即可。

   ④ 发布包

   - 注册npm账号，访问https://www.npmjs.com
   - 填写账号相关信息
   - 点击 create Account
   - 登录邮箱，点击验证链接，进行账号的验证
   - 登录npm账号：在终端中执行 npm login 命令，依次输入用户名、密码、邮箱后，即可登录成功。注意：记得把地址切换为npm官方服务器
   - 把包发布到npm：将终端切换到包的根目录之后，运行npm publish命令，即可将包发布到npm上，注意：包名不能雷同。发布之前最好到官网去查询一下是否有重复的包名

   ⑤ 删除已发布的包

   - 运行npm unpublish 包名 --force，即可从npm删除已发布的包。只能删除72小时以内发布的包，被删除的包在24小时已被不允许重复发布，发包的时候要慎重，尽量不要忘npm上发布没有意义的包

6. ###### 模块的加载机制

   模块在第一次加载后会被缓存。这也意味着多次调用require() 不会导致模块的代码被多次执行

   不论是内置模块，用户自定义模块、还是第三方模块，它们都会有限从缓存中加载，从而提高模块的加载效率。

   ① 内置模块加载机制

   内置魔魁啊是由Node.js官方提供的模块，内置模块的加载优先级最高。

   ② 自定义模块加载机制

   使用require()加载自定义模块时，必须指定以./或../开头的路径标识符。在加载自定义模块时，如果没有指定./或../这样的路径标识符，则node会把它当作内置模块或第三方模块进行加载

   node.js会按一下顺序分别尝试加载一下的文件:

   - 按照确切的文件名进行加载
   - 补全.js拓展名进行加载
   - 补全.json扩展名进行加载
   - 补全.node扩展名进行加载
   - 加载失败，终端报错

   ③ 第三方模块的加载机制

   Node.js会从当前模块的父目录开始，尝试从/node_modules文件中加载第三方模块，如果没有找到对应的第三方模块，则移动到再上一层父目录中，进行加载，直到文件系统的根目录。

   ④目录作为模块

   把目录作为模块标识符，传递给require()进行加载的时候，有三种加载方式：

   - 在被加载的目录下查找一个叫做package.json的文件，并寻找main属性，作为require()加载入口
   - 如果目录里没有package.json文件，或者main入口不存在无法解析，则Node.js会视图加载目录下的index.js文件
   - 如果以上两步都失败了,则Node.js会在终端打印错误消息，报告模块的缺失：Error:Cannot find module 'xxx

#### 8.Express

Express是基于Node.js平台，快速、开放、极简的Web开发框架。

通俗的理解：Express的作用和Node.js内置的http模块类似，是专门用来创建Web服务器的

本质：就是npm上的第三方包，提供了快速创建Web服务器的便捷方法。

官网：http://www.expressjs.com.cn/

思考：为什么有了http模块,还要有Express模块

答案：http内置模块用起来很复杂，开发效率很低；Express是基于内置的http模块进一步封装出来的，能够极大的提高开发效率。

思考：http内置模块与Express是什么关系?

答案：类似于浏览器中Web API 和 jQuery的关系。后者是基于前者进一步封装出来的。

##### **express功能**

​	对于前端程序员来说，最常见的两种服务器，分别是：

- Web网站服务器：专门对外提供Web网页资源的服务器
- API接口服务器：专门对外提供API接口的服务器

**安装**

```
npm i express
```

创建基本的Web服务器

```javascript
//导入express
const express = require('express')
//创建web服务器
const app = express()
//启动服务器
app.listen(80,()=>{
console.log('express server running at http://127.0.0.1')
})
```

##### **基本使用**

1. ###### 监听GET请求

   通过app.get()方法，可以监听客户端GET请求，具体的语法格式如下：

   ```javascript
   // 参数1：客户端请求的URL地址
   // 参数2：请求对应的处理函数
   //		req：请求对象（包含了与请求相关的属性与方法）
   //		res：响应对象（包含了与响应相关的属性与方法）
   app.get('请求URL'，funcion(req,res){/*处理函数*/})
   ```

2. ###### 监听POST请求

   ```javascript
   // 参数1：客户端请求的URL 地址
   // 参数2：请求对应的处理函数
   //		req：请求对象（包含了与请求相关的属性与方法）
   //		res：响应对象（包含了与响应相关的属性与方法）
   app.post('请求URL',function(req,res){/*处理函数*/})
   ```

3. ###### 把内容响应给客户端

   ```javascript
   app.get('user',(req,res)=>{
   //向客户端发送 JSON 对象
   res.send({name:'zs',age:20,gender:'男'})
   })
   
   app.post('/user',(req,res)=>{
   //向客户端发送文本内容
   res.send('请求成功')
   })
   ```

4. ###### 获取URL中携带的查询参数

   通过req.query对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数：

   ```javascript
   app.get('/',(req,res)=>{
   // req.query默认是一个空对象
   // 客户端使用 ?name=zs&age=20 这种查询字符串形式，发送到服务器参数
   // 可以通过 req.query 对象访问到，例如：
   // req.query.name req.query.age
   // 默认情况下req.query是一个空对象
   console.log(req.query)
   })
   ```

5. ###### 获取URL中的动态参数

   通过req.params对象，可以访问到URL中，通过：匹配到动态参数：

   ```javascript
   app.get('/user/:id',(req,res)=>{
   	// req.params 默认是一个空对象
   	// 里面存放着通过：动态匹配到的参数值
   	console.log(req.params)
   })
   ```

6. ###### 托管静态资源

   **express.static()**

   express提供了一个非常好用的函数，叫做express.static()，通过它，我们可以非常方便地创建一个静态资源服务器。例如，通过如下代码就可以将public目录下的图片、CSS文件、JavaScript文件对外开放访问了：

   ```
   app.use(express.static('public')) //可以多次调用这个函数托管多个静态资源目录
   ```

   现在，就可以访问public目录中所有的文件了。

   注意：Express在指定的静态目录中查找文件，并对外提供资源的访问路径，因此，存放静态文件目录名不会出现在URL中。

   **挂载路径前缀**

   如果希望在托管的静态资源访问路径之前，挂在路径前缀，则可以使用如下的方式：

   ```javascript
   app.use('/public',express.static('public'))
   ```

7. ###### nodemon

   在编写调试Node.js项目时候，如果修改了项目的代码，则需要平凡的手动close掉，然后再重新启动，非常麻烦。

   使用nodemon（http://www.npmjs.com/package/nodemon）这个工具，它能够监听项目文件的变动，当代码被修改后，nodemon会自动棒我们重启项目，极大的方便了开发和调试

   **全局安装nodemon**

   ```
   npm install -g nodemon
   ```

   **使用nodemon**

   当基于Node.js编写了一个网站应用的时候，传统的方式，是运行node app.js命令，来启动项目。这样做的坏处是：代码被修改之后，需要手动重启项目。

   现在，我们可以将node命令替换为nodemon命令，使用nodemon app.js来启动项目。这样做的好处是：代码被修改之后，会被nodemon监听到，从而实现自动重启项目的效果。

   ```powershell
   node app.js
   # 将上面的终端命令，替换为下面的终端命令，即可实现自动重启项目的效果
   nodemon app.js
   ```

8. ###### 路由

   Express中的路由指的是客户端的请求与服务器处理函数之间映射关系

   由3部分组成，分别是请求的类型、请求的URL地址、处理函数，格式如下：

   ```
   app.METHOD(PATH,HANDLER) method 请求类型、path请求路径、handler处理函数
   ```

   **路由的匹配过程**

   每当一个请求到达服务器之后，需要经过路由的匹配，只有匹配成功之后，才会调用对应的处理函数。

   再匹配时，会按照路由的顺序进行匹配，如果请求类型和请求的URL同时匹配成功，则express会将这次请求，转交给对应的function函数进行处理。

   **模块化路由**

   为了方便对路由进行模块化的管理，Express不建议将路由直接挂载到app上，而是推荐路由抽离为单独的模块。将路由抽离为单独模块的步骤如下：

   ① 创建路由模块对应的js文件

   ② 调用express.Router()函数创建路由对象

   ③ 向路由对象上挂在具体的路由

   ④ 使用module.exports向外共享路由对象

   ⑤ 使用app.use()函数注册路由模块

   ```javascript
   //1.导入路由模块
   const userRouter = require('./router/user.js')
   //2.使用app.use()注册路由模块
   app.use(userRouter)
   ```

   **中间件的概念**

   中间件(Middleware),特指业务流程的中间处理环节,上一级中间件的输出是下一个中间件的输入。

   当一个请求到达Express的服务器之后，可以连续调用多个中间件，从而对这次请求进行预处理。

   - Express中间件的格式

     本质上就是一个function处理函数，Express中间件的格式如下

     ```javascript
     var express = require('express');
     var app = express();
     app.get('/',function(req,res,next){
     next();
     })
     app.listen(3000)
     ```

     注意：中间件函数的形参列表中，必须包含next参数。而路由处理函数中只包含req和res

   - next 函数的作用

     next函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由。

   - 定义中间件函数

     ```javascript
     // 常量mw所指向的就是一个中间件函数
     const mw = function(req,res,next){
     console.log('这是一个最简单的中间件处理函数')
     //注意:在当前中间件的业务处理完毕后，必须调用next()函数
     // 表示把流转关系交割下一个中间件或路由
     next()
     }
     ```

   - 全局生效的中间件

     客户端发起的任何请求，到达服务器之后，都会触发的中间件，叫做全局生效的中间件。

     通过调用app.use(中间件函数),即可定义一个全局生效的中间件，示例代码：

     ```javascript
     // 常量mw所指向的就是一个中间件函数
     const mw = function(req,res,next){
     console.log('这是一个最简单的中间件函数')
     next()
     }
     app.use(mw)
     ```

   - 中间件的作用

     多个中间件之间，共享同一份req和res。基于这样的特性，我们可以在上游的中间件中，统一为req或res对象添加自定义的属性或方法，提供下流的中间件或路由进行使用。

   - 定义多个全局中间件

     可以使用app.use()连续定义多个全局中间件。客户端情趣到达服务器之后，会按照中间件定义的先后顺序一次进行调用。

     ```javascript
     app.use(function(req,res,next){
     console.log('调用了第一个全局中间件')
     next()
     })
     app.use(function(req,res,next){
     console.log('调用了第二个全局中间件')
     next()
     })
     app.get('/user',(req,res)=>{
     //请求这个路由，会依次触发上述两个全局中间件
     res.send('Home Page')
     })
     ```

   - 局部生效的中间件

     不使用app.use()定义的中间件,叫做局部生效的中间件,示例代码如下：

     ```javascript
     //定义中间函数 mw1
     const mw1 = function(req,res,next){
     console.log('这是中间件函数')
     next()
     }
     //mw1 这个中间件只在“当前路由中生效”，这种用法属于“局部生效的中间件”
     app.get('/',mw1,function(req,res){
     res.send('Home page')
     })
     //mw1 这个中间件不会影响下面这个路由
     app.get('/user',function(req,res){res.send('User page')})
     ```

   - 定义多个局部中间件

     ```javascript
     //一下两种写法是完全邓健的，可以根据自己的喜好，选择任意一种方式进行使用
     app.get('/',mw1,mw2,(req,res)=>{res.send('Home page')})
     app.get('/',[mw1,mw2],(req,res)=>{res.send('Home page')})
     ```

   - 使用注意事项

     1. 一定要在路由之前注册中间件
     2. 客户端发送过来的请求，可以连续调用多个中间件进行处理
     3. 执行完中间件的业务代码之后，不要忘记调用next()函数
     4. 为了防止代码逻辑混乱，调用next()函数之后不要在写额外的代码
     5. 连续调用多个中间件时，多个中间件之间，共享req和res对象

   - 中间件的分类

     1. 应用级别的中间件

        通过app.use()或app.get()或app.post(),绑定到app实例上的中间件，叫做应用级别的中间件，代码示例如下：

        ```javascript
        app.use((req,res,next)=>{
        next()
        })
        app.get('/',mw1,(req,res)=>{
        res.send('Home page')
        })
        ```

     2. 路由级别的中间件

        绑定到express.Router()实例上的中间件，叫做路由级别的中间件。它的用法和应用级别中间件没有任何区别。只不过，应用级别中间件是绑定到app实例上，路由级别中间件绑定到router实例上，代码示例如下：

        ```javascript
        var app = express()
        var router = express.Router()
        
        // 路由级别的中间件
        router.use(function(req,res,next){
            console.log('Time',Date.now)
            next
        })
        app.user('/',router)
        ```

     3. 错误级别的中间件

        错误级别中间件的作用：专门来捕获整个项目中发生的异常错误，从而防止项目异常崩溃的问题。

        格式：错误级别的中间件的function处理函数中，必须有4个形参，形参顺序从前到后分别是(err,req,res,next)

        ```javascript
        app.get('/',function(req,res){ //路由
        throw new Error('服务器内部发生了错误') //自定义错误
        res.send('Home Page')
        })
        // 定义错误级别的中间件，捕获整个项目异常错误，从而防止程序崩溃
        app.use(function(err,req,res,next){
        console.log('发生错误:'err.message)
        res.send('Error!'+message)
        })
        ```

        注意：错误级别的中间件必须注册在所有路由之后！！！

     4. Express内置的中间件

        - express.static 快速托管静态资源的内置中间件，例如：HTML 文件、图片、CSS样式（无兼容性）

        - express.json 解析JSON格式的请求体数据(有兼容性，仅在4.16.0+版本中可用)

        - express.urlencoded 解析URL-encoded格式的请求体数据(有兼容性，仅在4.16.0+版本中可用)

          ```javascript
          //配置解析 application/json 格式数据的内置中间件
          app.use(express.json())
          // 配置解析 application/x-www-form-urlencode 格式数据的内置中间件
          app.use(express.urlencoded({extended:false}))
          ```

          具体使用

          ```javascript
          //导入express模块
          const express = require('express')
          //创建express的服务器实例
          const app = express()
          // 注意：除了错误级别的中间件，其他的中间件，必须在路由之前进行配置
          // 通过express.json 这个中间件，解析表单中的JSON格式数据
          app.use(express.json())
          // 通过express.urlencoded()这个中间件，解析表单中的 url-encoded格式数据
          app.use(express.urlencoded(extended:false))
          app.post('/user',(req,res)=>{
              // 在服务器，可以使用req.body这个属性，来接收客户端发送过来的请求体数据
              // 默认情况下，如果不配置解析表单数据的中间件，则req.body 默认等于undefined
              console.log(req.body)
              res.send('ok')
          })
          app.post('/book',(req,res)=>{
              //在服务器端，可以通过req,body来获取JSON格式的表单数据和url-encoded格式的数据,默认情况向等于{}
              console.log(req.body)
              res.send('ok')
          })
          ```

     5. 第三方中间价

        非Express官方内置的，而是由第三方开发出来的中间件，叫做第三方中间件。在项目中，大家可以按需下载并配置第三方中间件，从而提高项目开发的效率。

        例如：在express@4.16.0之前版本中经常使用body-parser这个第三方中间件，来解析请求体数据。使用步骤如下：

        ① 运行npm install body-parser 安装中间件

        ② 使用require()导入中间件

        ③ 调用 app.use()注册并使用中间件

     6. 自定义中间件

        需求描述与实现步骤

        自己手动模拟一个类似于express.urlencoded这样的中间件，来解析POST提交到服务器的表单数据。

        实现步骤

        - 定义中间件

          ```javascript
          // 导入express模块
          const express = require('express')
          // 创建express的服务器实例
          const app = express()
          
          app.use((req,res,next)=>{
          //定义中间件具体的业务逻辑
          })
          // 调用app.listen方法，指定端口号并启动web服务器
          app.listen(80,function(){
          console.log('Express server running at http://127.0.0.1')
          })
          ```

        - 监听req的data事件

          在中间件中，需要监听req对象的data事件，来获取客户端发送到服务器的数据

          如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后，分批发送到服务器。所以data事件可能会触发多次，每一次触发data事件时，获取到数据只是完整数据的一部分，需要手动对接收到的数据进行拼接。

          ```javascript
          // 定义变量，用来存储客户端发送过来的请求体数据
          let str = ''
          // 监听req 对象的 data 事件(客户端发送过来的新的请求体数据)
          req.on('data',(chunk)=>{
          // 拼接请求体数据，隐士转换为字符串
          str += chunk
          })
          ```

        - 监听req的end事件

          当请求体数据接收完毕之后，会自动触发req的end事件。因此，我们可以在req的end事件中，拿到并处理完整的请求体数据。实例代码如下：

          ```javascript
          // 监听req对象的end事件（请求体发送完毕后自定触发）
          req.on('end',()=>{
              //打印完整的请求体数据
              console.log(str)
              //TODO：把字符串格式的请求体数据，解析成对象格式
          })
          ```

        - 使用querystring模块解析请求体数据

          Node.js内置了一个querystring模块，专门用来处理查询字符串。通过这个模块提供的parse()函数，可以轻松把查询字符串解析成对象格式，代码示例如下：

          ```javascript
          // 导入处理querystring内置模块
          const qs = require('querystring')
          
          // 调用qs.parse()方法，把查询字符串解析为对象
          const body = qs.parse(str)
          ```

        - 将解析出来的数据对象挂在为req.body

          上游的中间件和下游的中间件及路由之间，共享同一份req和res。因此，我们可以将解析出来的数据，挂载为req的自定义属性，命名为req.body，供下游使用。示例代码如下：

          ```javascript
          req.on('end',()=>{
          const body = qs.parse(str) //调用qs.parse()方法，把查询字符串解析为对象
          req.body = body //将解析出来的请求体对象，挂在为req.body属性
          next() //最后，一定要调用next()函数，执行后续的业务逻辑
          })
          ```

        - 将自定义中间件封装为模块

          为了优化代码结构，我们可以把自定义的中间件函数，封装为独立的模块，示例代码如下：

          ```javascript
          // custom-body=parser.js 模块中的代码
          const qs = require('querystring')
          function bodyParser(req,res,next){/*省略其它代码*/}
          module.exports = bodyParser // 向外导出解析请求体数据的中间件函数
          
          // -------------------------分割线------------------------------
          
          //1. 导入自定义中间模块
          const mBodyParser = require('custom-body-parser')
          //2. 注册自定义的中间模块
          app.use(myBodyParser)
          ```

9. ###### 使用Express写接口

   创建基本的服务器

   ```javascript
   // 导入 express 模块
   const express = require('express')
   // 创建express的服务器实例
   const app = express()
   
   //调用 app.listen 方法，指定端口号并启动web服务器
   app.listen(80,function(){
   console.log('Express server running at http://127.0.0.1')
   })
   ```

   创建API路由模块

   ```javascript
   // apiRouter.js[路由模块]
   const express = require('express')
   const apiRouter = express.Router()
   
   // 这里挂在对应的路由
   
   module.exports = apiRouter
   // --------------------------------------------
   
   const apiRouter = require('/apiRouter.js')
   app.use('/api',apiRouter)
   ```

   编写GET接口

   ```javascript
   apiRouter.get('/get',(req,res)=>{
   // 1. 获取到客户端通过查询字符串，发送到服务器的数据
   const query = req.query
   // 2. 调用 res.send() 方法，把数据响应给客户端
   res.send({
   status:0,// 状态，0 表示成功，1表示失败
   msg:'GET请求成功！', // 状态描述
   data:query //需要响应给客户端的具体数据
   })
   })
   ```

   编写POST接口

   ```javascript
   apiRouter.post('/post',(req,res)=>{
   // 1. 获取客户端通过请求体，发送到服务器 URL-encoded 数据
   const body = req.body
   // 2. 调用 res.send() 方法，把数据响应给客户端
   res.send({
   status:0, 			// 状态，0 表示成功，1 表示失败
   msg:'POST请求成功！',// 状态描述消息
   data:body 		   // 需要响应给客户端的具体数据
   })
   })
   // 注意：如果要获取URL-encoded格式的请求体数据，必须配置中间件app.use(express.urlencoded({extended:false}))
   ```

   **cors 跨域资源共享**

   1. 接口的跨域问题

      当一个web应用视图访问另外一个不同域名、协议或端口上的资源时，浏览器处于安全考虑会阻止这种请求，除非目标资源明确允许跨域访问。

      解决跨域问题的方案主要有两种：

      ① CORS （主流解决方案，推荐使用）

      ② JSONP （有缺陷的解决方案，只支持GET请求）

   2. 使用cors 中间件解决跨域问题

      cors 是Express的一个第三方中间件。通过安装和配置cors中间件，可以很方便地解决跨域问题。使用步骤分为以下3步：

      ① 运行 npm install cors 安装中间件

      ② 使用 const cors = require('cors')导入中间件

      ③ 在路由之前调用 app.use(cors()) 配置中间件

   3. 什么是CORS

      CORS（Cross-Origin Resource Sharing，跨域资源共享）由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源

      浏览器的同源安全策略默认会阻止网页跨域获取资源。但如果接口服务器配置了CORS相关的HTTP响应头，就可以解除浏览器端的跨域访问限制。

   4. CORS的注意事项

      ① CORS 主要在服务器端进行配置。客户端浏览器无需做任何额外的配置，即可请求开启CORS接口

      ②CORS在浏览器中由兼容性。

   5. CORS 响应头部 Access-Control-Allow-Origin

      响应头中可以携带一个 Access-Control-Allow-Origin字段，其语法如下：

      ```
      Access-Control-Allow-Origin:<origin> | *
      res.setHeader('Access-Control-Allow-Origin,'*')
      ```

      其中，origin参数的值指定了允许访问资源的外域URL。通配符*，表示允许来自任何域的请求，就是所有网站都可以访问你的服务器。

      如果你希望只能够自己的网站访问，下面的字段值只允许来自http://itcast.cn的请求：

      ```
      res.setHeader('Access-Control-Allow-Origin,'http://itcast.cn')
      ```

   6. CORS响应头部 Access-Control-Allow-Headers

      默认情况下，CORS 仅支持客户端向服务器发送如下的9个请求头：

      Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width、Content-Type（值仅限于text/plain、multipart/form-data、application/x-www-form-urlencoded三者之一）

      如果客户端向服务器发送了额外的请求头信息，则需要在服务器端，通过Access-Control-Allow-Headers对额外的请求头进行声明，否则这次请求会失败！

      ```
      // 允许客户端额外向服务器端发送Content-Type请求头和X-Custom-Header
      // 注意：多个请求头之间使用英文的逗号进行分割
      res.setHeader('Access-Control-Allow-Headers','Content-Type,X-Custom-Header')
      ```

   7. CORS响应头部 Access-Control-Allow-Methods

      默认情况下，CORS仅支持客户端发起GET、POST、HEAD 请求。

      如果客户端希望通过PUT、DELETE等方式请求服务器的资源，则需要在服务器端，通过Access-Control-Alow-Methods来指明实际请求所允许使用的HTTP方法。

      示例代码：

      ```javascript
      // 只允许 POST、GET、DELETE、HEAD 请求方法
      res.setHeader('Access-Control-Allow-Methods','POST、GET、DELETE、HEAD')
      // 允许所有的HTTP 请求方法
      res.setHeader('Access-Control-Allow-Methods','*')
      ```

   8. CORS请求的分类

      客户端在请求CORS接口时，根据请求方式和请求头的不同，可以将CORS的请求分为两大类，分别是：

      - 简单请求

        同时满足以下两大条件的请求，就属于简单请求：

        ① 请求方式：GET、POST、HEAD 三者之一

        ② HTTP头部信息不超过以下几种字段：无自定义头部字段、Accept、Accept-Language、Content-Language、DPR、Downlink、Save-Data、Viewport-Width、Width、Content-Type（值仅限于text/plain、multipart/form-data、application/x-www-form-urlencoded三者之一）

      - 预检请求

        只要符合以下任何一个条件的请求，都属于预检请求：

        ① 请求方式为GET、POST、HEAD之外的请求Method类型

        ② 请求头中包含自定义头部字段

        ③ 向服务器发送了application/json格式的数据

        在浏览器与服务器正式通信之前，浏览器会先发送OPTION请求进行预检，以获知服务器是否允许该实际请求，所以这一次的OPTION请求称为”预检请求“。服务器成功响应预检请求后，才会发送真正的请求，并且携带真实数据

      - 简单请求和预检请求的区别

        简单请求的特点：客户端与服务器之间只会发生一次请求

        预检请求的特点：客户端与服务器之间会发生两次请求，OPTION预检请求成功之后，才会发起真正的请求。

      9. JSONP 接口

      1. 概念与特点

         概念：浏览器端通过<'scrip>标签的src属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式叫做JSONP。

         特点：

         ① JSONP 不属于真正的Ajax请求，因为它没有使用XMLHttpRequest这个对象。

         ② JSONP 仅支持GET请求，不支持POST、PUT、DELETE等请求。

      2. 创建JSONP接口的注意事项

         如果项目中已经配置了CORS跨域资源共享，为了防止冲突，必须在配置CORS中间件之前声明JSONP的 接口。否则JSONP接口会被处理成开启了CORS的接口。

         ```javascript
         // 优先创建 JSONP 接口[这个接口不会被处理成 CORS 接口]
         app.get('/api/jsonp',(req,res)=>{})
         
         //再配置CORS中间件【后续的所有接口，都会被处理成CORS 接口】
         app.use(cors())
         
         //这是一个开启了CORS的接口
         app.get('/api/get',(req,res) =>{ })
         ```

      3. 实现JSONP接口的步骤

         - 获取客户端发送过来的回调函数的名字

         - 得到要通过JSONP形式发送给客户端的数据

         - 根据前两部得到的数据，拼接出一个函数调用的字符串

         - 把上一步拼接得到的字符串，响应给客户端的<'scrip>标签进行解析执行

           ```javascript
           app.get('/api/jsonp',(req,res)=>{
           // 1.获取客户端发送过来的回调函数的名字
           const funcName = req.query.callback
           // 2.得到要通过JSONP形式发送给客户端的数据
           const data = {name:'zs',age:22}
           // 3.根据前两步得到的数据，拼接出一个函数调用的字符串
           const scriptStr = `${funcName}(${JSON.stringify(data)})`
           // 4.把上一步拼接得到的字符串，响应给客户端<script>标签进行解析执行
           res.send(scriptStr)
           })
           ```

         - 再网页中使用JQuery发起JSONP请求

           调用$.ajax()函数，提供JSONP的配置选项，从而发起JSONP请求，示例代码如下：

           ```javascript
           $('#btnJSONP').on('click',function(){
           $.ajax({
           methods:'GET',
           url:'http://127.0.0.1/api/jsonp',
           dataType:'jsonp',
           success:function(res){
           console.log(res)
           		}
           	})
           })
           ```


#### 9.MySQL

数据库（database）是用来阻止、存储和管理数据的仓库。为了方便管理互联网世界中的数据，就有了数据库管理系统的概念。用户可以对数据库中的数据进行新增、查询、更新、删除等操作。

常见的数据库有如下几个：

- MySQL数据库（目前使用最广泛、留下度最高的开源免费数据库
- Oracle数据库（收费）
- SQL Server 数据库（收费）
- Mongodb 数据库

其中，MySQL、Oracle、SQL Server 属于**传统型数据库**（又叫做：关系型数据库 或 SQL 数据库），这三者的设计理念相同，用法比较类似。

而Mongodb属于**新型数据库**(又叫做：非关系型数据库或NoSQL数据库)，它在一定程度上弥补了传统型数据库的缺陷。

1. 传统型数据库的数据组织结构

   数据的组织结构指的就是以什么样的结构进行存储，传统型数据库的数据组织结构，与Excel中数据的组织结构比较类似。

   它分为数据库(database)、数据表(table)、数据行(row)、字段(field)

##### 在项目中操作MqSQL

步骤：

- 安装操作MySQL数据库的第三方模块(mysql)

  ```powershell
  npm install mysql
  ```

- 配置mysql模块连接到MySQL数据库

  ```javascript
  // 导入mysql模块
  const mysql = require('mysql')
  // 2.建立与MySQL 数据库连接
  	const db = mysql.createPool({
  	host:'127.0.0.1', // 数据库的 IP 地址
  	user:'root',	  // 登录数据库账号
  	password:'admin123',//登录数据库密码
  	database:'my_db_01' //指定要操作哪个数据库
  })
  // 检测mysql模块是否能正常工作
  db.query('SELECT 1',(err,result) =>{
      if(err) return console.log(err.message)
      // 只要能打印出[RowDataPacket{'1':1}的结果，就证明数据库连接正常]
      console.log(results)
  })
  ```

- 通过mysql模块执行SQL语句

  1. 查询数据

     ```javascript
     db.query('select * from users',(err,result) =>{
     // 查询失败
     if(err) return console.log(err.message)
     //查询成功
     console.log(result)
     })
     ```

  2. 插入数据

     ```javascript
     // 要插入到users表中的数据对象
     const user = {username:'Spider-Man',password:'pcc123'}
     // 待执行的SQL语句，其中英文的?表示占位符
     const sqlStr = 'insert into users(username,password) values(?,?)'
     // 使用数组的形式，依次为 ? 占位符指定具体的值
     db.query(sqlStr,[user.username,user.password],(err,result)=>{
     if(err) return console.log(err.message) // 失败
     if(result.affectedRows === 1) {console.log('插入数据成功')} // 成功
     })
     ```

     插入数据的便捷方式 (如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据)

     ```javascript
     const user = {username:'Spider-Man2',password:'pcc4321'}
     const sqlStr = 'inser into users set ?'
     db.query(sqlStr,user,(err,results)=>{
     if(err) return console.log(err.message)
     if(result.affectedRows === 1) {console.log('插入成功')}
     })
     ```

  3. 更新数据

     ```javascript
     const user = {id:7,username:'aaa',password:'000'}
     const sqlStr = 'UPDATE users SET username=?,password=? where id=?'
     db.query(sqlStr,[user.username,user.password,user.id],(err,result)=>{
     if(err) return console.log(err.message) // 失败
     if(result.affectedRows === 1){console.log('更新数据成功！')}
     })
     ```

     更新数据的便捷方式 (如果数据对象的每个属性和数据表的字段一一对应，则可以通过如下方式快速插入数据)

     ```javascript
     const user = {id:7,username:'aaa',password:'000'}
     const sqlStr = 'UPDATE users SET ? where id=?'
     db.query(sqlStr,[user.username,user.password,user.id],(err,result)=>{
     if(err) return console.log(err.message) // 失败
     if(result.affectedRows === 1){console.log('更新数据成功！')}
     })
     ```

  4. 删除数据

     ```javascript
     const sqlStr = 'delete from users where id =?'
     // 如果SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
     // 如果SQL语句中只有一个占位符，则可以省略数组
     db.query(sqlStr,7,(err,result)=>{
     if(err) return console.log(err.message)
     if(result.affectedRows == 1) {console.log('删除数据成功！')}
     })
     ```

     标记删除

     使用delete语句，会真正把数据从表中删除掉。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作。所谓标记删除，就是在表中设置类似的于status这样的状态字段，来标记当前这条数据是否被删除。当用户执行了删除的动作时，我们并没有执行delete语句把数据删除掉，而是执行了update语句，将这条数据对应的status字段标记为删除即可。

     ```javascript
     db.query('update users set status = 1 where id = ?',6,(err,results)=>{
     if(err) return console.log(err.message)
     if(results.affectedRows === 1){console.log('删除成功！')}
     })
     ```

#### 10.前后端身份认证

##### web开发模式

目前主流的Web开发模式有两种，分别是：

**① 基于服务端渲染的传统Web开发模式**

服务端渲染的概念：服务器发送给客户端的HTML页面，是在服务器通过字符串的凭借，动态生成的。因此，客户端不需要使用Ajax这样的技术额外请求页面的数据。代码示例如下：

```javascript
app.get('/index.html',(req,res)=>{
// 1. 要渲染的数据
const user = {name:'zs',age:20}
// 2. 服务器端通过字符串的拼接，动态生成HTML内容
const html = `<h1>姓名：${user.name},年龄：${user.age}</h1>`
// 3. 把生成好的页面内容响应给客户端，因此，客户端闹到的是带有真实数据的HTML页面
res.send(html)
})
```

优缺点：

- 优点
  - 前端耗时少。因为服务端负责动态生成HTML内容，浏览器只需要直接渲染页面即可。尤其是移动端，更省电。
  - 有利于SEO。因为服务器端响应的是完整的HTML页面内容，所以爬虫更容易爬取获得信息，更有利于SEO。
- 缺点
  - 占用服务器端资源。即服务器完成HTML页面内容的拼接，如果请求较多，会对服务器造成一定的压力。
  - 不利于前后端分离，开发效率低。使用服务器端渲染，则服务进行分工合作，尤其对于前端复杂度高的项目，不利于项目高效开发。

**② 基于前后端分离的新型Web开发模式**

前后端分离的概念：前后端分离的开发模式，依赖于Ajax技术的广泛应用。家呢研制，前后端分离的web开发模式，就是后端只负责提供API接口，前端使用Ajax调用接口的开发模式。

优缺点：

- 优点
  - 开发体验好。前端专注于UI页面的开发，后端专注于api的开发，且前端有更多的选择性
  - 用户体验好。Ajax技术的广泛应用，极大的提高了用户的体验，可以轻松实现页面的局部刷新
  - 减轻了服务器端的渲染压力。因为页面最终是在每个用户浏览器中生成是
- 缺点
  - 不利于SEO。因为完整的HTML页面需要在客户端动态凭借完成，所以爬虫无法爬取页面的有效信息。（解决方案：利用Vue、React等前端框架SSR（server side render）技术能够很好的解决SEO问题）

##### 如何选择Web开发模式

不谈业务场景而盲目选择使用何种开发方式都是耍流氓

- 比如企业级网站，主要功能是展示没有复杂的交互，并且需要良好的SEO，则这时我们就需要使用服务器端渲染；
- 而类似后台管理项目，交互性比较强，不需要考虑SEO，那么就可以使用前后端分离的开发模式。

另外，具体使用何种开发模式并不是绝对的，为了同时兼顾首页的渲染速度和前后端分离的开发效率，一些网站采用了首屏服务器渲染+其它页面前后端分离开发模式。

##### 身份认证

身份认证(Authentication)又称身份验证、鉴权，是指通过一定手段，完成对用户身份的确认。

目的是为了确认当前所声称为某种身份的用户，确实是所声称的用户。

对于服务端渲染和前后端分离这两种开发模式来说，分别有着不同的身份认证方案：

- 服务端渲染推荐使用Session认证机制
- 前后端分离推荐使用JWT认证机制

###### Session认证机制

1. HTTP协议的无状态性

   HTTP协议的无状态性，指的是客户端的每次HTTP请求都是**独立的**，服务器在处理请求时**不知道**这个请求与之前的请求是否来自同一个客户端，连续多个请求之间没有直接的关系，服务器不会主动保留每次HTTP请求的状态

2. 如何突破HTTP无状态限制

   - Cookie(客户端存储)
   - Session(服务器存储+标识)
   - Token(自包含状态)
   - 隐藏字段(HTML表单)

3. 什么是Cookie

   Cookie是存储在用户浏览器中的一段不超过4KB的字符串。它由一个名称(Name)、一个值(value)和其它几个用于控制Cookie有效期、安全性、适用范围的可选属性组成。不同域名下的Cookie各自独立，每当客户端发起请求时，会自动挡把**当前域名**下所有**未过期**的Cookie一同发送到服务器。

   特性：

   - 自动发送
   - 域名独立
   - 过期时限
   - 4KB限制

4. Cookie在身份认证中的作用

   客户端第一次请求服务器的时候，服务器通过响应头的形式，向客户端发送一个身份认证的Cookie，客户端会自动将Cookie保存在浏览器中。

   随后，当客户端浏览器每次请求服务器的时候，浏览器会自动将身份认证相关的Cookie，通过请求头的形式发送给服务器，服务器即可验明客户端的身份。

5. Cookie不具有安全性

   由于Cookie是存储在浏览器中的，而且浏览器也提供了读写Cookie的API，因此很容易被伪造，不具有安全性。因此不建议服务器将重要的隐私数据，通过Cookie的形式发送给浏览器。

6. 在Express中使用Session认证

   - 安装express-session中间件

     ```powershell
     npm install express-session
     ```

   - 配置express-session中间件

     ```javascript
     // 1.导入session中间件
     var session = require('express-session')
     // 2.配置Session 中间件
     app.use(session({
     secret:'keyboard cat',//secret 属性值可以为任意字符串
     resave:false,		  //固定写法
     saveUninitialized:true//固定写法
     }))
     ```

   - 向session中存数据

     当express-session中间件配置成功后，即可通过req.session 对象，从而存储用户的关键信息：

     ```javascript
     app.post('/api/login',(req,res)=>{
     //判断用户提交的登录信息是否正确
     if(req.body.username !=='admin' || req.body.password !== '000000'){
     	return res.send({status:1,msg:'登录失败'})
     req.session.user = req.body // 将用户的信息，存储到Session中
     req.session.islogin = true	// 将用户的登录状态，存储到Session中
     
     res.send({status:0,msg:'登录成功'})
     }
     })
     ```

   - 从Session中获取数据

     可以直接从req.session对象上获取之前存储的数据，示例代码如下：

     ```javascript
     // 获取用户姓名的接口
     app.get('/api/username',(req,res)=>{
     // 判断用户是否登录
     if(!req.session.islogin){
     return res.send({status:1,msg:'fail'})
     }
     res.send({status:0,msg:'success',username:req.session.user.name})
     })
     ```

   - 清空session

     调用req.session.destory()函数，即可清空服务器保存的session信息

     ```javascript
     // 退出登录的接口
     app.post('/api/logout',(req,res)=>{
     // 清空当前客户端对应的session信息
     req.session.destory()
     res.send({
     status:0,
     msg:'退出登录成功'
     })
     })
     ```

7. JWT认证机制

   - Session认证的局限性

     Session认证机制需要配合Cookie才能实现。由于Cookie默认不支持跨域访问，所以，当涉及到前端跨域请求后端接口的时候，需	要做很多的额外配置，才能实现跨域session认证。

     - 当前端请求后端接口不存在跨域问题的时候，推荐使用Session身份认证机制
     - 当前端请求后端接口不存在跨域问题的时候，推荐使用JWT认证机制

   - 什么是JWT认证机制？

     JWT(JSON Web Token)是目前最流行的跨域认证解决方案

   - JWT工作原理

     用户的信息通过Token字符串形式，保存在客户端浏览器中。服务器通过还原Token字符串的形式来认证用户的身份

   - JWT的组成部分

     JWT通常由三部分组成，分别是Header(头部)、Payload(有效载荷)、signature(签名)

     三者之间使用英文的"."分隔，格式如下：

     ```
     Header.Payload.signature
     ```

     - Payload部分才是真正的用户信息，它是用户信息经过加密之后生成的字符串
     - Header 和 Signature 是安全性相关的部分，只是为了保证Token的安全性

   - JWT的使用方式

     客户端接收到服务器返回的JWT之后，通常会将它储存在localStorage或sessionStorage中。

     此后，客户端每次与服务器通信，都要带上这个JWT的字符串，从而进行身份认证。推荐的做法是把JWT放在HTTP请求头的Authorization字段中，格式如下：

     ```
     Authorization:Bearer <token>
     ```

     ① 安装JWT相关的包

     ```powershell
     npm install jsonwebtoken express-jwt
     ```

     其中：

     - jsonwebtoken用于生成JWT字符串
     - express-jwt用于将JWT字符串解析还原成JSON对象

     ② 导入JWT相关的包

     ```
     const jwt = require('jsonwebtoken')
     const expressJWT = require('express-jwt')
     ```

     ③ 定义secret密钥

     为了保证JWT字符串的安全性，防止JWT字符串在网络传输过程中被别人破解，我们需要专门定义一个用于加密和加解密的secret密钥：

     - 当生成JWT字符串的时候，需要使用secret密钥对用户的信息进行加密，最终得到加密好的JWT字符串
     - 当把JWT字符串解析还原成JSON对象的时候，需要使用secret密钥进行解密
     - 密钥的本质就是一个字符串

     ④ 在登录成功后生成JWT字符串

     调用Jsonwebtoken包提供的sign()方法，将用户的信息加密成JWT字符串，响应给客户端：

     ```javascript
     // 登录接口
     app.post('/api/login',function(req,res){
     res.send({
     status:200,
     message:'登录成功！',
     token:jwt.sign({username:userinfo.username},secretkey,{expiresIn:30s})
     })
     })
     ```

     ⑤ 将JWT字符串还原为JSON对象

     客户端每次在访问那些有权限接口的时候，都需要主动通过请求头中的Authorization字段，将Token字符串发送到服务器进行身份认证。此时，服务器可以通过express-jwt这个中间件，自动将客户端发送过来的Token解析还原成JSON对象

     ```javascript
     // 使用app.use()来注册中间件
     // expressJWT({secret:secretKey}) 就是用来解析Token的中间件
     // .unless({path:[/^\/api\//]}) 用来指定哪些接口不需要访问权限
     app.use(expressJWT({secret:secretKey}).unless({path:[/^\/api\//]}))
     ```

     ⑥ 使用req.user获取用户信息

     当express-jwt这个中间件配置成功之后，即可在哪些有权限的接口中，使用req.user对象，来访问从JWT字符串中解析出来的用户信息了，示例代码如下：

     ```javascript
     app.get('/admin/getinfo',function(req,res){
     console.log(req.user)
     res.send({
     status:200,
     message:'获取用户信息成功！',
     data:req.user
     })
     })
     ```

     ⑦捕获解析JWT失败后产生的错误

     当使用express-jwt解析Token字符串时，如果客户端发送过来的Token字符串过去或不合法，会产生一个解析失败的错误，影响项目的正常运行。我们可以通过Express的错误中间件，捕获这个错误并进行相关处理，示例代码如下：

     ```javascript
     app.use((err,req,res,next) =>{
     //token 解析失败导致的错误
     if(err.name === 'UnauthorizedError'){
     return res.send({status:401,messageL'无效的token})
     }
     //其它原因导致的错误
     res.send({status:500,message:'未知错误'})
     })
     ```

      

   

