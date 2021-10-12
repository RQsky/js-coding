/**
 * 这题考循环+setTimeOut()，其中setTimeOut()包含打印i和间隔i秒
 * 1. 用var创建i，打印的i是参数(运行时拿到)，计时器的i是数值(在for循环里计算)。所以会间隔打印最终i的取值。
 * 2. 用let创建i，因为块级作用域，可以理解为把setTimeOut()加入宏任务队列时把i的数值也传递了进去。--并不是传递,就是作用域问题.
 * NOTE setTimeOut()是在被加入任务队列时开始计时的
 */
/**
 * 只能借助let out 或者 let i 实现想要的0 1 2 3 4效果
 */
for (var i = 0; i < 5; i++) {
	let out = i
	setTimeout(function () {
		console.log(out)
	}, 1000 * i)
}
// // 每隔一秒输出: 0 1 2 3 4

// for (var i = 0; i < 5; i++) {
// 	setTimeout(function () {
// 		console.log(i)
// 	}, 1000 * i)
// }
// // 每隔一秒输出:5 5 5 5 5

// for (let i = 0; i < 5; i++) {
// 	setTimeout(function () {
// 		console.log(i)
// 	}, i * 1000)
// }
// // 每隔一秒输出:0 1 2 3 4

for (var i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i)
	}, i * 1000)
}
// 测试结果： 立即输出5 然后每隔一秒输出5 总共输出5次

for (let i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i)
	}, i * 1000)
}
// 测试结果：立即输出0 然后每隔一秒分别输出1 2 3 4
