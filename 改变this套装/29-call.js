/**
 * call() 做了什么？
 * - 改变this指向
 * - 传递参数给 fn()
 * - * call挂在Function.prototype
 */
Function.prototype.myCall = function (tar, ...args) {
	tar = tar || window // tar 可能不是有效对象，这时则让this指向window
	tar.fn = this
}
