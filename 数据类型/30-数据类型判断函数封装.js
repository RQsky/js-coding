/**
 * toString() 返回值是 [object type]，type即对象类型
 */
function typeOf(obj) {
	return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

console.log(typeOf([])) // 'array'
console.log(typeOf({})) // 'object'
console.log(typeOf(new Date())) // 'date'
