const fs = require('fs')
const path = require('path')
const dir = require('./dir.js')
const file = require('./file.js')

function content (ctx, fullStaticPath) {
  const reqPath = path.join(fullStaticPath, ctx.url)

  const exist = fs.existsSync(reqPath)

  let content = ''

  if (!exist) {
    content = '404 Not Found'
  } else {
    const stat = fs.statSync(reqPath)
    console.log(ctx.url, reqPath)
    content = stat.isDirectory() ? dir(ctx.url, reqPath) : file(reqPath)
  }

  return content
}

module.exports = content