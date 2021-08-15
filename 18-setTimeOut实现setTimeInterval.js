/**
 * NOTE 开发时尽量避免setInterval()，这个东西有问题
 * 1. 某些间隔可能被跳过
 * 2. 多个定时器的代码执行间隔可能小于预期
 * 方法1：setTimeout() 递归调用
 * 方法2：arguments.callee()
 */
// 递归
var i = 0
function count() {
	console.log(i++)
	setTimeout(count, 1000)
}
count()

// callee()
var i = 0
setTimeout(function () {
	console.log(i++)
	setTimeout(arguments.callee, 1000)
}, 1000)
