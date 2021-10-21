/**
 * EventBus，是一个类，可以实例化创建一个EventBus。
 * 包含功能：注册事件，移除事件，触发事件，单次执行。
 */
// 定义EventBus类，它实例化返回一个Map()存事件
class EventBus {
	constructor() {
		this._events = new Map() // 初始化事件池
	}
	// 为type类型事件绑定fn回调
	on(type, fn) {
		const handler = this._events.get(type) || [] // 获取type类型事件回调栈
		handler.push(fn) // 将事件fn加入回调栈
		this._events.set(type, handler)
	}
	// 移除type类型事件回调fn
	off(type, fn) {
		const handler = this._events.get(type) // 获取type类型事件回调栈
		if (!handler) return
		handler = handler.filter(e => {
			return e !== fn
		})
		this._events.set(type, handler)
	}
	// 触发事件
	emit(type, ...args) {
		const handler = this._events.get(type)
		handler.map(fn => fn(...args))
	}
	// 仅执行一次
	once(type, fn) {
		let wrap = (...args) => {
			fn.apply(this, args)
			this.off(type, wrap)
		}
		this.on(type, wrap)
	}
}
