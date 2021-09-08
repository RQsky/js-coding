/**
 * 什么是bind() 函数？
 * - 绑定bind()函数的this
 * - 创建一个新函数，当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，
 * - 之后的一序列参数将会在传递的实参前传入作为它的参数。（F可以接收新的参数）
 * - * 新函数可能被作为构造函数调用
 * 原理：利用 apply() 或 call() 方法
 */
Function.prototype.myBind = function (tar, ...args) {
	var self = this // 绑定this
	return function F() {
		// 假如F被当作构造函数使用，根据new原理，在F被调用时，this指向一个空对象（原型链已被绑定，此时this是F的实例）
		// 若F不是被当作构造函数使用，则this应该指调用F的上下文，不应是F的实例。
		if (this instanceof F) return new F(...args, ...arguments)
		return self.apply(tar, [...args, ...arguments])
	}
}

var obj = {
	name: 'Better',
	position: 'front-end engineer'
}
var func = function (age) {
	console.log('name', this.name)
	console.log('position', this.position)
	console.log('age', age)
}
var f = func.myBind(obj, 18)
f()
