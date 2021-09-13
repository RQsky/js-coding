/**
 * JSONP 是一个箭头函数，接收一个对象（url, params（对象形式的）, callback）作为参数
 * 1. 组装带参数的url：原始url+?+key=value&key=value&callback
 * 2. callback应该就是函数名，在Promise里才注册成函数。
 * 3. 三个箭头函数
 */
const jsonp = ({ url, params, callbackName }) => {
	const generateUrl = () => {
		let dataSrc = ''
		for (let key in params) {
			// for in 会遍历原型链上的属性，用这个函数来过滤
			// 那为什么要用call而不是直接params.has(key)，为了防止params是null，以及有对象重写此方法。
			if (Object.prototype.hasOwnProperty.call(params, key)) {
				dataSrc += `${key}=${params[key]}&`
			}
		}
		dataSrc += `callback=${callbackName}`
		return `${url}?${dataSrc}`
	}
	return new Promise((resolve, reject) => {
		const scriptEle = document.createElement('script')
		scriptEle.src = generateUrl()
		document.body.appendChild(scriptEle)
		window[callbackName] = data => {
			resolve(data)
			document.removeChild(scriptEle) // resolve后的代码可以执行，且比resolve先执行因为resolve是微任务。
		}
	})
}
