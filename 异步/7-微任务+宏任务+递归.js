/**
 * 字节面试题
 * 为什么下面一段代码可以正常运行，上半段不可以？
 * 因为setTImeout属于异步宏任务，不在主线程栈内存中
 */
function fn() {
	fn()
}
fn() // Uncaught RangeError: Maximum call stack size exceeded
// -------------------------------------------------------------------
var num = 0
function fn() {
	console.log(num++)
	setTimeout(fn, 1000)
}
fn() // 正常运行
