/**
 * 基本深拷贝
 * 1. 判断当前是数组还是对象，创建相应的空对象
 * 2. 判断当前元素是对象（递归）还是常量（直接复制）
 * 3. 缺点：只能拷贝数组对象函数，不能实现null, 包装对象（Number，String，Boolean），Date对象，RegExp复制。
 * JSON 先转字符串再还原对象
 * 1. 可以拷贝null
 * 2. undefined, Symbol, function 被过滤
 * 3. Date 被转字符串
 * 4. NaN，变为null
 */
// test
var obj = {
	number: 1,
	string: 'abc',
	bool: true,
	undefined: undefined,
	null: null,
	symbol: Symbol('s'),
	arr: [1, 2, 3],
	date: new Date(),
	userInfo: {
		name: 'Better',
		position: 'front-end engineer',
		skill: ['React', 'Vue', 'Angular', 'Nodejs', 'mini programs']
	},
	func: function () {
		console.log('hello better')
	}
}
// 基本深拷贝
function deepClone(obj) {
	var newObj = obj instanceof Array ? [] : {}
	for (var i in obj) {
		newObj[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
	}
	return newObj
}
// console.log(deepClone(obj))

// JSON
var copyObj = JSON.parse(JSON.stringify(obj))
console.log(copyObj)
