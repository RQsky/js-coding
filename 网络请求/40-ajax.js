/**
 * 1. 初始化，open，set，钩子(配resolve, reject)，send
 * 2. ajax状态码和http状态码不一样，ajax状态码
 * - 0 已初始化
 * - 1 已open
 * - 2 已send
 * - 3 正在下载
 * - 4 下载完成
 */
const getJSON = function (url) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open('GET', url, false) // xhrReq.open(method, url, async, user, password); 初始化一个同步请求
		xhr.setRequestHeader('Accept', 'application/json')
		// 当ready State属性发生变化时调用事件钩子
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== 4) return
			if (xhr.status === 200 || xhr.status === 304) resolve(xhr.responseText)
			else reject(new Error(xhr.responseText))
		}
		xhr.send()
	})
}
