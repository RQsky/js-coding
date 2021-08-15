/**
 * 考点：箭头函数，块级作用域，闭包。
 * 考点多，但是其实不难
 * 注释里的函数是我觉得箭头函数看的难受，就转化为了普通形式，转了才发现是闭包。
 */
let i = 1
let fn = i => n => console.log(n + ++i)
// let fn = function (i) {
// 	return function (n) {
// 		console.log(n + ++i)
// 	}
// }
let f = fn(1)
f(2) // 4
fn(3)(4) // 8
f(5) // 8
console.log(i) // 1
