/**
 * 实现sleep效果
 * 方法1：Promise
 * 方法2：async / await。利用await()的强制同步，等待Promise的setTimeOut()
 * 方法3：generate。看不懂，function*是什么？yield, next, value又是什么？
 */
// Promise
let sleep = function (time) {
	return new Promise(function (resolve, reject) {
		console.log('start')
		setTimeout(function () {
			resolve()
		}, time)
	})
}
sleep(1000).then(function () {
	console.log('end')
})

// async / await
function sleep(time) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			// do something
			resolve()
		}, time)
	})
}
async function test() {
	console.log('start')
	var result = await sleep(1000)
	console.log('end')
	return result
}
test() // 先输出start，延迟1000ms后输出end

// generate
function* sleep(time) {
	yield new Promise((resolve, reject) => {
		console.log('start')
		setTimeout(() => {
			// do something
			resolve()
		}, time)
	})
}
sleep(1000)
	.next()
	.value.then(() => {
		console.log('end')
	}) // 先输出start，延迟1000ms后输出end
