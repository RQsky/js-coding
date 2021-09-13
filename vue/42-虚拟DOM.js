/**
 * 将虚拟DOM转真实DOM
 * vnode解构：tag, attrs, children
 */
function render(vnode, container) {
	container.appendChild(_render(vnode))
}
function _render(vnode) {
	// 数字类型转字符串
	if (typeof vnode === 'number') vnode = String(vnode)
	// 字符串类型直接创建文本节点
	if (typeof vnode === 'string') return document.createTextNode(vnode)
	// 普通DOM, 创建DOM, 遍历属性, 递归children
	const dom = document.createElement(vnode.tag)
	if (vnode.attrs) {
		// Object.keys() 返回对象自身的可迭代属性组成的数组
		Object.keys(vnode.attrs).forEach(key => {
			const value = vnode.attrs[key]
			dom.setAttribute(key, value)
		})
	}
	vnode.children.forEach(child => render(child, dom))
	return dom
}
