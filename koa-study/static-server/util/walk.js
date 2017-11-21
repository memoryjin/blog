const fs = require('fs')
const MIMES = require('./MIMES')

function walk (path) {
  const files = fs.readdirSync(path)
  const dirList = [],
        fileList = []
  for (let file of files) {
    const itemArr = file.split('.')
    const itemMime = itemArr.length > 1 ? itemArr[itemArr.length - 1] : ''
    typeof MIMES[itemMime] !== 'undefined' ? fileList.push(file) : dirList.push(file)
  }
  return dirList.concat(fileList)
}

module.exports = walk
