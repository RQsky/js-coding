/**
 * TODO
 * 什么是bind() 函数？
 * - bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。
 * 原理：利用 apply() 或 call() 方法
 */
Function.prototype.customBind = function (context) {
	var self = this // 保存函数的上下文
	var args = [].slice.call(arguments, 1) // 获取自定义bind函数的参数
	return function () {
		args = args.concat([].slice.call(arguments)) // 获取自定义bind函数返回函数传入的参数
		return self.apply(context, args)
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
var f = func.customBind(obj, 18)
f()
