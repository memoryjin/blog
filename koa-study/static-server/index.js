const Koa = require('koa')
const path = require('path')
const content = require('./util/content.js')
const mimes = require('./util/MIMES.js')

const app = new Koa()

const staticPath = './static'

const parseMime = function (url) {
  let extName = path.extname(url)
  extName = extName ? extName.slice(1) : ''
  return mimes[extName]
}

app.use(async ctx => {
  const fullStaticPath = path.join(__dirname, staticPath)

  const outPut = content(ctx, fullStaticPath)

  const mime = parseMime(ctx.url)

  if (mime) {
    ctx.type = mime
  }

  if (mime && mime.indexOf('image/') > -1) {
    ctx.res.writeHead(200)
    ctx.res.write(outPut, 'binary')
    ctx.res.end()
  } else {
    ctx.body = outPut
  }
})

app.listen(3000)