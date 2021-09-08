/**
 * call() 做了什么？
 * - 改变this指向
 * - 传递参数给 fn()
 * - * call挂在Function.prototype
 */
Function.prototype.myCall = function (tar = window, ...args) {
	tar.fn = this // 既然要让函数的this指向对象，那先在对象里新建一个属性存this。
	const res = tar[fn](...args)
	delete tar[fn]
	return res
}
