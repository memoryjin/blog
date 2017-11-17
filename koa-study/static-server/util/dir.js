const url = require('url')
const fs = require('fs')
const path = require('path')
const walk = require('./walk.js')

function dir (url, reqPath) {
  const contentList = walk(reqPath)
  let html = '<ul>'
  for (let item of contentList) {
    html += `<li><a href="${url === '/' ? '' : url}/${item}">${item}</a></li>`
  }
  html += '</ul>'
  return html
}

module.exports = dir