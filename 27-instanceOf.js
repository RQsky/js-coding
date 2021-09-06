/**
 * A instanceOf B
 * 原理：判断构造函数B的原型是否在实例A的原型链上
 */
const instance_of = function (a, b) {
	let link = a.__proto__
	let pro = b.prototype
	while (link) {
		if (link === pro) return true
		link = link.__proto__
	}
	return false
}
