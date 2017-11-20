const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  if (ctx.url === '/index') {
    ctx.cookies.set(
      'cid',
      'hello world',
      {
        domain: 'localhost',
        path: '/index',
        maxAge: 10 * 60 * 1000,
        expires: new Date('2017-12-12'),
        httpOnly: false,
        overwrite: false
      }
    )
    ctx.body = 'cookie is OK'
  } else {
    ctx.body = 'Hello World~~'
  }
})

app.listen(3000)