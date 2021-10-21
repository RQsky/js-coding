/**
 * 基本深拷贝
 * 1. 判断当前是数组还是对象，创建相应的空对象
 * 2. 判断当前元素是对象（递归）还是常量（直接复制）
 * 3. 缺点：不能拷贝 null, 包装，日期，正则对象。
 * ----------------------------------------------------
 * JSON 先转字符串再还原对象
 * 1. 可以拷贝null
 * 2. undefined, Symbol, function 被过滤
 * 3. Date 被转字符串
 * 4. NaN，变为null
 * ----------------------------------------------------
 * 完全体深拷贝要对基本深拷贝的缺点做对应解决
 * 1. 处理循环引用
 * 2. 考虑其他可继续遍历类型如Map, Set
 * 3. 考虑特殊的不可继续遍历类型如包装，日期，正则
 */
// test
var obj = {
	// number: 1,
	// string: 'abc',
	// bool: true,
	// undefined: undefined,
	// null: null,
	// symbol: Symbol('s'),
	// arr: [1, 2, 3],
	// date: new Date(),
	// userInfo: {
	// 	name: 'Better',
	// 	position: 'front-end engineer',
	// 	skill: ['React', 'Vue', 'Angular', 'Nodejs', 'mini programs']
	// },
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
// console.log(copyObj)

// 完全体深拷贝
const completeDeepClone = function (obj, map = new Map()) {
	if (typeof obj !== 'object' || obj === null) return obj // 递归出口，基本类型，函数也在这里出
	const type = Object.prototype.toString.call(obj).slice(8, -1) // 获取数据类型，首字母大写

	// 可递归类型
	if (type === 'Array' || type === 'Object') {
		const res = Array.isArray(obj) ? [] : {} // 处理对象or数组
		// 处理循环引用
		if (map.get(obj)) return map.get(obj)
		map.set(obj, res)

		for (const key in obj) {
			res[key] = completeDeepClone(obj[key], map)
		}
		return res
	}

	// 不可递归特殊类型
	switch (type) {
		case 'Boolean':
			return new Boolean(obj)
		case 'Number':
			return new Number(obj)
		case 'String':
			return new String(obj)
		case 'Date':
			return new Date(obj)
		case 'Symbol':
			return Object(Symbol.prototype.valueOf.call(obj))
		default:
			return null
	}
}
// console.log(completeDeepClone(obj))
