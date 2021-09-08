/**
 * Promise.all(), 接收一个Promise数组作为参数，返回一个Promise
 * 返回的Promise是resolve 还是 reject 由第一个有结果的Promise决定。
 */
Promise.race = function (promiseArr) {
	return new Promise((resolve, reject) => {
		promiseArr.forEach(p => {
			// 如果不是Promise实例需要转化为Promise实例
			Promise.resolve(p).then(
				val => resolve(val),
				err => reject(err)
			)
		})
	})
}
