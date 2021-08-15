/**
 * 腾讯文档面试题
 * 1. 串行打印函数数组的Promise（是每个函数的返回值）
 * 2. 串行打印Promise并执行resolve
 */
let promiseArr = [
	() => {
		return new Promise(res => {
			console.log('run 1', Date.now())
			res('run 1 resolve')
		})
	},
	() => {
		return new Promise(res => {
			console.log('run 2', Date.now())
			res('run 2 resolve')
		})
	},
	() => {
		return new Promise(res => {
			console.log('run 3', Date.now())
			res('run 3 resolve')
		})
	}
]

async function fn() {
	for (let i in promiseArr) {
		// 串行打印console.log;
		// await promiseArr[i]()
		// 串行打印console.log并执行resolve
		await promiseArr[i]().then(value => {
			console.log(value)
		})
	}
}
fn()
