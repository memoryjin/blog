# 数据结构

用javascript来模拟栈、队列、链表、集合、字典和树等数据结构。

## 栈

栈是一种遵从后进先出(Last In First Out)原则的有序集合。新添加的或待删除的元素都保存在栈的末尾，称作栈顶，另一端就叫栈底。在栈里，新元素都靠近栈顶，旧元素都接近栈底。

```js
class Stack {
  constructor () {
    this.items = []
    this.size = this.items.length
  }

  // 进栈
  push (val) {
    this.items.push(val)
    return this.items.length
  }

  // 出栈
  pop () {
    return this.items.pop()
  }

  // 栈顶的元素
  peek () {
    return this.items[this.items.length - 1]
  }

  isEmpty () {
    return this.items.length === 0
  }

  clear () {
    this.items = []
  }
}
```

## 队列

队列是遵循FIFO(First In First Out)原则的一组有序的项。 队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

```js
class Queue {
  constructor () {
    this.items = []
    this.size = this.items.length
  }

  // 进队
  enqueue (val) {
    this.items.push(val)
    return this.items.length
  }

  // 出队
  dequeue () {
    return this.items.shift()
  }

  // 队列顶部的元素
  front () {
    return this.items[0]
  }

  isEmpty () {
    return this.items.length === 0
  }

  clear () {
    this.items = []
  }
}
```

## 链表

链表存储有序的元素集合，但不同于数组，链表中的元素在内存中并不是连续放置的。每个元素由一个存储元素本身的节点和一个指向下一个元素的引用(也称指针)组成。

### 单向链表——一个元素只能指向下一个元素

```js
const SingleNode = function (element) {
  this.element = element
  this.next = null
}

class LinkedList {
  constructor () {
    this.head = null
    this.length = 0
  }

  append (element) {
    let current
    const node = new SingleNode(element)
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
  }

  removeAt (pos) {
    if (pos >= 0 && pos < this.length) {
      let previous,
          index = 0,
          current = this.head
      if (pos === 0) {
        this.head = current.next
      } else {
        while (index < pos) {
          index++
          previous = current
          current = current.next
        }
        // 将previous与current的下一项链接起来，跳过current，从而移除它
        previous.next = current.next
      }
      this.length--
      return current.element
    } else {
      return null
    }
  }

  insert (pos, element) {
    // 由于插入的时候可以插到链表的最后一项后面，因此这里作‘<=’的判断
    if (pos >= 0 && pos <= this.length) {
      let node = new SingleNode(element),
          current = this.head,
          index = 0,
          previous
      if (pos === 0) {
        node.next = current
        this.head = node
      } else {
        while (index < pos) {
          index++
          previous = current
          current = current.next
        }
        node.next = current
        previous.next = node
      }
      this.length++
      return true
    } else {
      return false
    }
  }

  indexOf (element) {
    let index = 0,
        current = this.head
    while (current) {
      if (element === current.element) {
        return index
      }
      index++
      current = current.next
    }
    return -1
  }

  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  isEmpty () {
    return this.length === 0
  }

  getHead () {
    return this.head
  }
}
```

### 双向链表——一个元素既指向下一个元素，也指向上一个元素

```js
const DoubleNode = function (element) {
  this.element = element
  this.prev = null
  this.next = null
}
class DoublyLinkedList {
  constructor () {
    this.head = null
    this.length = 0
    this.tail = null
  }

  append(element) {
    const node = new DoubleNode(element)
    let current = this.head
    if (this.length === 0) {
      this.head = node
    } else {
      while (current.next) {
        current = current.next
      }
      current.next = node
      node.prev = current
    }
    this.tail = node
    this.length++
  }

  removeAt(pos) {
    let previous,
        current = this.head,
        index = 0
    if (pos >= 0 && pos < this.length) {
      if (pos === 0) {
        this.head = current.next
        this.head.prev = null
        if (this.length === 1) {
          this.tail = null
        }
      } else if (pos === this.length - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        while (index < pos) {
          index++
          previous = current
          current = current.next
        }
        previous.next = current.next
        current.next.prev = previous
      }
      this.length--
      return current.element
    } else {
      return null
    }
  }

  insert (pos, element) {
    if (pos >= 0 && pos <= this.length) {
      let previous,
          node = new DoubleNode(element),
          index = 0,
          current = this.head

      if (pos === 0) {
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          this.head = node
          node.next = current
          current.prev = node
        }
      } else if (pos === this.length) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        while (index < pos) {
          index++
          previous = current
          current = current.next
        }
        previous.next = node
        node.prev = previous
        node.next = current
        current.prev = node
      }
      this.length++
      return true
    } else {
      return false
    }
  }

  indexOf (element) {
    let index = 0,
        current = this.head
    while (current) {
      if (element === current.element) {
        return index
      } else {
        index++
        current = current.next
      }
    }
    return -1
  }

  remove (element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  isEmpty () {
    return this.length === 0
  }

  getHead () {
    return this.head
  }
}
```

## 集合

集合是由一组无序且唯一(即不能重复)的项组成的，可以对其进行并集、交集和差集等基本操作。ES6中新增的`Set`类对应的就是*集合*，关于集合的详细内容可以参看[ECMAScript6入门](http://es6.ruanyifeng.com/#docs/set-map)。

## 字典

和集合类似，字典也是用来存储唯一值的一种数据结构。不同的是，在集合中，我们感兴趣的是每个值本身，在字典里，我们感兴趣的是*键值*对。ES6中新增的`Map`类对应的就是*字典*，关于字典的详细内容可以参看[ECMAScript6入门](http://es6.ruanyifeng.com/#docs/set-map)。

## 二叉搜索树

树——一种非顺序数据结构，对于储存需要快速查找的数据非常有用，本文我们将用js来模拟一种特殊的树“*二叉搜索树*”。

```js
  const Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }

  class BinarySearchTree {
    constructor () {
      this.root = null
    }

    insert (key) {
      const insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
          if (node.left === null) {
            node.left = newNode
          } else {
            insertNode(node.left, newNode)
          }
        } else {
          if (node.right === null) {
            node.right = newNode
          } else {
            insertNode(node.right, newNode)
          }
        }
      }
      const node = new Node(key)
      if (this.root === null) {
        this.root = node
      } else {
        insertNode(this.root, node)
      }
    }

    // 中序遍历: 左子树->根节点->右子树
    inOrderTraverse (cb) {
      const inOrderTraverseNode = function (node, cb) {
        if (node !== null) {
          inOrderTraverseNode(node.left, cb)
          cb && cb(node.key)
          inOrderTraverseNode(node.right, cb)
        }
      }
      inOrderTraverseNode(this.root, cb)
    }

    // 前序遍历: 根节点->左子树->右子树
    prevOrderTraverse (cb) {
      const prevOrderTraverseNode = function (node, cb) {
        if (node !== null) {
          cb(node.key)
          prevOrderTraverseNode(node.left, cb)
          prevOrderTraverseNode(node.right, cb)
        }
      }
      prevOrderTraverseNode(this.root, cb)
    }

    // 后序遍历: 左子树->右子树->根节点
    postOrderTraverse (cb) {
      const postOrderTraverseNode = function (node, cb) {
        if (node !== null) {
          postOrderTraverseNode(node.left, cb)
          postOrderTraverseNode(node.right, cb)
          cb(node.key)
        }
      }
    }

    getMinVal () {
      const minNode = function (node) {
        if (node) {
          while (node.left !== null) {
            node = node.left
          }
          return node.key
        } else {
          return null
        }
      }
      return minNode(this.root)
    }

    getMaxVal () {
      const maxNode = function (node) {
        if (node) {
          while (node.right !== null) {
            node = node.right
          }
          return node.key
        } else {
          return null
        }
      }
      return maxNode(this.root)
    }

    // 查找某个节点
    search (key) {
      const searchNode = function (node, key) {
        if (node === null) {
          return false
        }
        if (key < node.key) {
          return searchNode(node.left, key)
        } else if (key > node.key) {
          return searchNode(node.right, key)
        } else {
          return true
        }
      }
      return searchNode(this.root, key)
    }

    // 移除某个节点，返回新的二叉树
    remove (key) {
      const removeNode = function (node, key) {
        if (node === null) {
          return null
        }
        if (key < node.key) {
          node.left = removeNode(node.left, key)
          return node
        } else if (key > node.key) {
          node.right = removeNode(node.right, key)
          return node
        } else {
          if (node.left === null && node.right === null) {
            node = null
            return node
          }
          if (node.left === null) {
            node = node.right
            return node
          } else if (node.right === null) {
            node = node.left
            return node
          }
          const minNode = getMinNode(node.right)
          node.key = minNode.key
          node.right = removeNode(node.right, minNode.key)
          return node
        }
      }
      const getMinNode = function (node) {
        if (node) {
          while (node.left !== null) {
            node = node.left
          }
          return node
        } else {
          return null
        }
      }
      return removeNode(this.root, key)
    }
  }
```