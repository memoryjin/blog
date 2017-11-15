# 算法

* 冒泡排序
* 选择排序
* 插入排序
* 归并排序
* 快速排序

## 冒泡排序法

![冒泡排序法](http://img.wowphp.com/KOMXDX8QE862/1867034-e19840224b331fae.gif)

```js
const bubbleSort = function (arr) {
  let notChange = true,
      len = arr.length
  for (let i = 0; i < len; i++) {
    notChange = true
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        notChange = false
      }
    }
    // 如果一趟序列遍历中元素位置没有发生交换，则序列已经排序完成
    if (notChange) break
  }
  return arr
}
```

## 选择排序法

![选择排序法](http://img.wowphp.com/KOMXDX8QE862/2.gif)

```js
const selectionSort = function (arr) {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}
```

## 插入排序法

![插入排序法](http://img.wowphp.com/KOMXDX8QE862/3.gif)

```js
const insertSort = function (arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    let index = i - 1, // 每次循环第一次比较的元素下标
        current = arr[i] // 当前要插入的元素
    while (index >= 0 && arr[index] > current) {
      arr[index + 1] = arr[index] // 将待比较元素后移一位
      index--
    }
    arr[index+1] = current
  }
  return arr
}
```

## 归并排序法

归并排序(merge sort)是一类与上述排序不同的另一种排序方法。归并的含义是将两个或两个以上的有序表合并成一个新的有序表。如下所示：

![归并示意图](http://img.blog.csdn.net/20170430104540322?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvcXFfMjU4Mjc4NDU=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)

![归并排序法](http://img.wowphp.com/KOMXDX8QE862/4.gif)

```js
const mergeSort = function (arr) {
  const len = arr.length
  if (len < 2) return arr
  const middleIndex = Math.floor(len / 2),
        left = arr.slice(0, middleIndex),
        right = arr.slice(middleIndex)
  return merge(mergeSort(left), mergeSort(right))
}

const merge = function (arr1, arr2) {
  let result = []
  while (arr1.length && arr2.length) {
    arr1[0] < arr2[0] ? result.push(arr1.shift()) : result.push(arr2.shift())
  }
  if (arr1.length) {
    result = result.concat(arr1)
  }
  if (arr2.length) {
    result = result.concat(arr2)
  }
  return result
}
```

## 快速排序法

![快速排序法](http://img.wowphp.com/KOMXDX8QE862/5.gif)

```js
const quickSort = function (arr) {
  if (arr.length < 2) {
    return arr
  }
  const middleIndex = Math.floor(arr.length / 2),
        middleValue = arr.splice(middleIndex, 1)[0]
        left = [],
        right = []
  arr.forEach(val => {
    val < middleValue ? left.push(val) : right.push(val)
  })
  return quickSort(left).concat(middleValue, quickSort(right))
}
```