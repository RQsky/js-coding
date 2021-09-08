/**
 * 模拟 new 操作符，他做了以下事情
 * - 创建空对象
 * - 让空对象this指向构造函数，并执行
 * - 让对象__proto__指向构造函数prototype
 * - 判断返回类型并返回
 */
const myNew = function () {
	let obj = {}
	let Constructor = [].shift.call(arguments)
	obj.__proto__ = Constructor.prototype
	let ret = Constructor.apply(obj, arguments)
	return typeof ret === 'object' ? ret : obj // 构造函数返回值若不是对象，要主动返回对象引用
}

// 测试
function foo() {
	this.name = 'ciel'
	this.arg = arguments[0]
}
foo.prototype.callName = function () {
	console.log(this.name)
}
let test = myNew(foo, 'hhh', '123', 'saf')
test.callName()
console.log(test.arg)
