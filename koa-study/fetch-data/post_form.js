const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  if (ctx.url === '/' && ctx.method === 'GET') {
    const html = `
      <h1>Koa2 request post demo</h1>
      <form method="POST" action="/">
        <p>userName</p>
        <input type="text" name="userName">
        <br>
        <p>age</p>
        <input type="text" name="age">
        <br>
        <button type="submit">提交</button>
      </form>
    `
    ctx.body = html
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    const postData = await parsePostData(ctx)
    ctx.body = postData
  } else {
    ctx.body = '<h1>404</h1>'
  }
})

const parsePostData = function (ctx) {
  return new Promise((resolve, reject) => {
    try {
      let postData = ''

      // 关于'data'和'end'两事件的详细信息可参看Class: http.ClientRequest
      ctx.req.addListener('data', data => {
        postData += data
      })
      ctx.req.addListener('end', () => {
        let parseData = parseQueryStr(postData)
        resolve(parseData)
      })
    } catch (err) {
      reject(err)
    }
  })
}

const parseQueryStr = function (queryStr) {
  const parseData = {}
  const queryStrList = queryStr.split('&')
  for (let item of queryStrList) {
    const itemList = item.split('=')
    parseData[decodeURIComponent(itemList[0])] = decodeURIComponent(itemList[1])
  }
  return parseData
}

app.listen(3000)