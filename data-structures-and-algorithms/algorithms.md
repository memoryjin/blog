# 算法

* 冒泡排序
* 选择排序
* 插入排序
* 希尔排序
* 归并排序
* 快速排序
* 堆排序
* 计数排序
* 桶排序
* 基数排序

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

```