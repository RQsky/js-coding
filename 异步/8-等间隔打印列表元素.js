// TODO
/**
 * 字节题。
 * 第一部分，不写async, await的话，Promise就没有运行，为什么？
 */
const list = [1, 2, 3]
const square = num => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num * num)
		}, 1000)
	})
}

function test() {
	list.forEach(async x => {
		const res = await square(x)
		console.log(res)
	})
}
test()
// 执行结果： 1s之后输出 1 4 9

// 不能修改square方法，实现每隔一秒输出结果
const list = [1, 2, 3]
const square = num => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(num * num)
		}, 1000)
	})
}

function test() {
	list.forEach((x, index) => {
		setTimeout(async () => {
			const res = await square(x)
			console.log(res)
		}, index * 1000)
	})
}
test()
