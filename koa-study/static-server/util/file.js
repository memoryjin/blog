const fs = require('fs')

function file (path) {
  return fs.readFileSync(path, 'binary')
}

module.exports = file
