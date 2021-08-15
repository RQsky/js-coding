/**
 * 这题考循环+setTimeOut()，其中setTimeOut()包含打印i和间隔i秒
 * 1. 用var创建i，打印的i是参数，计时器的i是数值。所以会间隔打印最终i的取值。
 * 2. 用let创建i，因为块级作用域，可以理解为把setTimeOut()加入宏任务队列时把i的数值也传递了进去。
 * NOTE setTimeOut()是在被加入任务队列时开始计时的
 */
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
