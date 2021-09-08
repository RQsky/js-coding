/**
 * 节流是什么？触发函数事件后，规定时间间隔内无法调用。
 * 实现方法：
 * - 时间戳：当触发时间时，取出时间戳和前一次的对比。如果大于设定周期则执行然后更新时间戳，否则不执行。
 * - 定时器：触发事件时设置一个定时器，再次触发时定时器存在就不执行，否则执行
 */
// 时间戳
function throttle(fn, wait) {
	var prev = 0
	return function () {
		var now = new Date().getTime()
		if (now - prev > wait) {
			// 如果时间间隔大于wait，执行函数
			fn.apply(this, arguments)
			prev = now // 把当前时间赋值给前一个时间
		}
	}
}
// 定时器
function throttle(fn, wait) {
	var timeId = null
	return function () {
		if (!timeId) {
			fn.apply(this, arguments)
			timeId = setTimeout(function () {
				timeId = null
			}, wait)
		}
	}
}

// 测试
function func() {
	console.log(111)
}
document.addEventListener('mouseover', throttle(func, 1000))
