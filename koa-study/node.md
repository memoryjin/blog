# node中常用API小结

## 全局对象

* **__dirname和__filename**

  - __dirname: the directory name of the current module. This the same as the `path.dirname()` of the `__filename`
  - __filename: the file name of the current module. This is the resolved absolute path of the current module file
  - Example: running `node example.js` from `/Users/jinchs`

```js
console.log(__dirname)
// Prints: /Users/jinchs
console.log(__filename)
// Prints: /Users/jinchs/example.js
```

* **process**

  - the `process` object is a `global` that provides infomation about, and control over, the current Node.js process. As a global, it is always available to Node.js applications without using `require()`
  - `process.argv`: returns an array containing the command line arguments passed when the Node.js process was launched
  - `process.argv0`: stores a read-only copy of the original value of `argv[0]` passed when Node.js starts

Example: running `node index.js app test`
```js
  console.log(process.argv)
  // [ 
  //   '/Users/jinchangsong/.nvm/versions/node/v8.4.0/bin/node',
  //   '/Users/jinchangsong/blog/koa-study/index.js',
  //   'app',
  //   'test' 
  // ]
  console.log(process.argv0)
  // node
```

## path模块

* **path.basename(path[, ext])**

  - path \<string>
  - ext \<string> An optional file extension
  - Returns: \<string> returns the last portion of a path

```js
path.basename('/foo/bar/baz/asdf/quux.html');
// Returns: 'quux.html'

path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// Returns: 'quux'
```

* **path.extname(path)**

  - path \<string>
  - Returns: \<string> returns the extension of the path

```js
path.extname('index.html');
// Returns: '.html'

path.extname('index.coffee.md');
// Returns: '.md'

path.extname('index.');
// Returns: '.'

path.extname('index');
// Returns: ''

path.extname('.index');
// Returns: ''
```

* **path.join([...paths])**

  - ...paths \<string> A sequence of path segments
  - Returns: \<string>

```js
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// Returns: '/foo/bar/baz/asdf'
```

* **path.normalize(path)**

  - path \<string>
  - Returns: \<string>

```js
path.normalize('/foo/bar//baz/asdf/quux/..');
// Returns: '/foo/bar/baz/asdf'
```

## fs(后续补充)