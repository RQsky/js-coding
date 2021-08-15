/**
 * 题目：让一个不可迭代对象变为可迭代。
 * 解法：可迭代对象必须拥有`@@iterator属性`和 length 属性.所以新增一个属性即可。
 * NOTE 对象遍历要用of，否则会打印出length属性的值
 */
var obj = {
	0: 0,
	1: 1,
	length: 2
}
for (let i of obj) {
	console.log(i)
}
// 报错：Uncaught TypeError: obj is not iterable

var obj = {
	0: 0,
	1: 1,
	length: 2,
	[Symbol.iterator]: Array.prototype[Symbol.iterator]
}
for (let i of obj) {
	console.log(i)
}

// 原理：可迭代对象都拥有@@iterator属性
