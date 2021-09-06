/**
 * EventBus，是一个类，可以实例化创建一个EventBus。
 * 一个 EventBus对象，你可以向其中注册事件，当事件触发时，调用回调函数。
 * 2021.9.6 我只实现了简单版，复杂版有时间再说 TODO
 */
// 定义EventBus类，它实例化返回一个Map()存事件
class EventEmeitter {
	constructor() {
		this._events = this._events || new Map() // '||'尝试将第一个输入转为Boolean。转后若为true，返回表达式1的值。否则，返回表达式2的值。
	}
}

// 定义emit()方法，触发type事件，执行回调
EventEmeitter.prototype.emit = function (type, ...args) {
	let handler = this._events.get(type)
	handler.call(this, ...args)
	return true
}

// 定义 addListener() 方法，添加事件和回调
EventEmeitter.prototype.addListener = function (type, fn) {
	if (!this._events.get(type)) this._events.add(type, fn)
}
