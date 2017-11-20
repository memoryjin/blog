const fs = require('fs')
const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  if (ctx.url === '/postText' && ctx.method === 'GET') {
    const content = fs.readFileSync('./postText.html', 'binary')
    ctx.res.writeHead(200)
    ctx.res.write(content, 'binary')
    ctx.res.end()
  } else if (ctx.url === '/postImg' && ctx.method === 'GET') {
    const content = fs.readFileSync('./postImg.html', 'binary')
    ctx.res.writeHead(200)
    ctx.res.write(content, 'binary')
    ctx.res.end()
  } else if (ctx.url === '/postByAjax' && ctx.method === 'POST') {
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
      ctx.req.addListener('data', data => {
        postData += data
      })
      ctx.req.addListener('end', () => {
        let parseData = postData
        resolve(parseData)
      })
    } catch (err) {
      reject(err)
    }
  })
}

app.listen(3000)