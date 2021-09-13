/**
 * Promise.all(), 接收一个Promise数组作为参数，返回一个Promise
 * 如果传入的所有 Promsie 都是 fulfilled，则返回由他们的值（就是resolve函数接收的参数吧）组成的，状态为 fulfilled 的新 Promise；
 * 只要有一个 Promise 是 rejected，则返回 rejected 状态的新 Promsie，且它的值是第一个 rejected 的 Promise 的值；
 * 只要有一个 Promise 是 pending，则返回一个 pending 状态的新 Promise；
 */
Promise.myAll = function (promiseArr) {
	return new Promise((resolve, reject) => {
		const ans = []
		let index = 0 // 为什么要用index计数因为then是微任务，若在for循环结束resolve会破坏执行顺序
		for (let i in promiseArr) {
			promiseArr[i]
				.then(res => {
					ans[i] = res
					index++
					if (index === promiseArr.length) resolve(ans)
				})
				.catch(err => reject(err))
		}
	})
}
