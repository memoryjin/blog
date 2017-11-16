const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  const url = ctx.url
  const ctx_query = ctx.query
  const ctx_querystring = ctx.querystring

  ctx.body = {
    url,
    ctx_query,
    ctx_querystring
  }
})

app.listen(3000)
