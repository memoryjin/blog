# GET请求数据获取

## 方法

在koa中，获取GET请求url中的query参数的方法有两种：
  - 请求对象`ctx.query`  ->  返回如 {a:1, b:2}
  - 请求字符串`ctx.querystring`  ->  返回如a=1&b=2

## 例子

执行`node get.js`并访问<http://localhost:3000/page/user?a=1&b=2>