/**
 * 考点：块级作用域
 * ReferenceError原因：函数fn()构成块级作用域，当你使用变量a，JS先看当前块内是否有a，有a则用块内的a。但是块内a用let声明，在声明前调用会触发ReferenceError。
 * - 如果这里a用var声明，则 console.log(a) 输出 undefined.
 * 因为块内声明了a，所以块内对a的修改影响的是块内的a，不影响全局a。
 * 因为块内没有声明b，所以块内对b的修改是全局作用的。
 * 参考：https://segmentfault.com/a/1190000019338567
 */
let a = 12
let b = 12
function fn() {
	console.log(a) // Uncaught ReferenceError: Cannot access 'a' before initialization at fn
	console.log(b) // 12
	let a = (b = 13)
	console.log(a, b) // 13，13
}
fn()
console.log(a, b) // 12，13
