/**
 * apply?和call一样
 * - 注册在Function.prototype上
 * - 改变this
 * - 传参
 */
Function.prototype.myApply = function (tar = window, args) {
	tar.fn = this
	const res = tar[fn](args)
	delete tar[fn]
	return res
}
