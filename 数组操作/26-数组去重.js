/**
 * 数组方法与常见面试题，https://juejin.cn/post/6969785442564571143
 * 增：push(), unshift(), concat()
 * 删：pop(), shift()
 * 改：reverse(), splice()
 * 查：slice(), at(索引, 可以为负)
 * - indexOf(元素), 返回首个索引，不存在返回-1
 * - includes(元素), 返回true/false
 * - find((el, index, array) => {return 条件句}), 返回首个符合条件句的元素
 * 迭代：
 * - some((el, index, array) => {return 条件句}), 存在元素符合条件句就返回 true
 * - every((el, index, array) => {return 条件句}), 每个元素都符合条件句才返回 true
 * - forEach() , 常用来单纯循环
 * - map((el, index, array) => { return 新数组元素 }, callback的修正this) , 常用来数组元素映射，返回新数组
 * - reduce((前一个元素回调返回值, el, index, arr) => {}, 初始值) , 可用于累加，扁平化，去重等
 * - filter((el, index, array) => {return 条件句}), 创建一个符合条件元素组成的的新数组
 * sort(), 小于0a在b之前，大于0相反
 * join()
 */

const a = [1, 1, 2, 1, 2]
let res = []

// // 1. indexOf去重（index新数组）,O(n^2)。这里也可以用includes。
a.forEach(x => {
	if (res.indexOf(x) === -1) res.push(x)
})

// // 2. indexOf去重（index老数组）,O(n^2)
a.forEach((x, i) => {
	if (a.indexOf(x) === i) res.push(x)
})

// // 3. 排序 + 相邻元素去重, O(nlogn)
a.sort((a, b) => a - b)
a.forEach((x, i) => {
	if (i === 0) res.push(x)
	else if (x !== a[i - 1]) res.push(x)
})

// 4. Set + 扩展算符/转数组(转数组几种方法？)
res = [...new Set(a)]
// res = Array.from(new Set(a))
// Map不行，Map() 接收一个迭代器对象，子元素是数组形式的键值对

// 5.

console.log(res)
