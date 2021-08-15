/**
 * 要求：规定时间内，多次触发事件后，再执行事件处理函数。
 * 原理：对处理函数进行延时操作，若设定时间之前事件被再次触发，则计时器重置。
 * 1. 肯定要闭包，封装定时器
 * 2. 保存事件对象和事件参数
 * 3. 清除定时器
 * 4. 设置定时器，调整this指向。
 * A.call(B), 对B对象使用A方法。
 */
function debounce(fn, wait) {
	var timeId = null
	return function () {
		var context = this // 保存绑定事件的对象，如document
		var args = arguments // 获取事件参数，如event
		timeId && clearTimeout(timeId) // 如果规定时间内（wait）再次触发事件，则清除定时器  // 这句应该意思是 if (timeId) clearTimeOut(timeId)
		timeId = setTimeout(function () {
			fn.apply(context, args) // 使用apply方法把fn函数的this指向事件对象
		}, wait)
	}
}
function func() {
	console.log(111)
}
document.addEventListener('mouseover', debounce(func, 1000))
