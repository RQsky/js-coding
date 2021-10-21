/**
 * 限流器是一个复杂的东西，它应当是一个类，包含一个构造函数
 * 限流器功能包括：添加任务 add，开始运行 start
 * promise限流器，乍一想任务队列里任务应当是promise，可promise定义时执行不合理。怎么做？任务队列里是promiseCreater取代promise
 */
class Scheduler {
	constructor() {
		this.queue = [] // 执行队列
		this.maxCount = 2 // 并行限制 2
		this.runCount = 0 // 正在运行 0
	}
	add(promiseCreater) {
		this.queue.push(promiseCreater)
	}
	start() {
		for (let i = 0; i < this.maxCount; i++) this.request()
	}
	request() {
		if (!this.queue.length || this.runCount == this.maxCount) return // 没有任务或者已经满载 return
		this.runCount++
		// 取出一段代码并运行，成功回调是正在运行数-1，然后在执行新的任务
		this.queue
			.shift()()
			.then(() => {
				this.runCount--
				this.request()
			})
	}
}

const timeout = time =>
	new Promise(resolve => {
		setTimeout(resolve, time)
	})

const scheduler = new Scheduler()

const addTask = (time, order) => {
	scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
scheduler.start()
