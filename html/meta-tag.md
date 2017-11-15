# meta标签

meta标签位于文档顶部，不包含任何内容。主要用于提供有关页面的元数据(metadata)，这些元数据将服务于浏览器(如何布局或重载页面)，搜索引擎优化和其他网络服务。

## 组成

meta标签共有两个属性，分别是`name`和`http-equiv`。

### 1. name属性

name属性主要用于描述网页，比如网页的作者、关键词、叙述等。与之对应的属性值是`content`，content中的值是对name填入类型的具体描述，便于搜索引擎抓取。示例如下：

```html
<!-- 标注网页作者 -->
<meta name="author" content="jinchs">

<!-- 告诉搜索引擎，你网页的关键字 -->
<meta name="keywords" content="前端，javascript，react">

<!-- 告诉搜索引擎，你网页的主要内容 -->
<meta name="description" content="中途转行的菜鸟前端">
```

### 2. http-equiv属性

给http请求增加额外的请求头信息。示例如下：

```html
<!-- content-Type用于设定网页字符集，便于浏览器解析和渲染页面。推荐用html5推荐的charset方式，避免使用http-equiv来设定 -->
<meta http-equiv="content-Type" content="text/html;charset=utf-8">
<meta charset="utf-8">

<!-- X-UA-Compatible指定浏览器以哪种版本渲染页面，一般设置为最新模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<!-- 指定请求和响应遵循的缓存机制 -->
<meta http-quiv="cache-control" content="max-age=60">
```

## 常用的meta标签设定

```html
<!-- H5页面窗口自动调整到设备宽度，并禁止用户缩放页面 -->
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scale=no">

<!-- 可隐藏地址栏，仅针对IOS的Safari（注：IOS7.0版本以后，safari上已看不到效果）-->
<meta name="apple-mobile-web-app-capable" content="yes">

<!-- 仅针对IOS的Safari顶端状态条的样式（可选default/black/black-translucent） -->
<meta name="apple-mobile-web-app-status-bar-style" content="black">

<!-- IOS中禁用将数字识别为电话号码/忽略Android平台中对邮箱地址的识别 -->
<meta name="format-detection"content="telephone=no, email=no">

<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">

<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">

<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">

<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">

<!-- UC应用模式 -->
<meta name="browsermode" content="application">

<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">

<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">

<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
```