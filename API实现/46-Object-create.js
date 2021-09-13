/**
 * Object.create() 创建一个新对象，让参数作为它的原型对象。
 * 不能直接建对象，要用构造函数建对象
 */
function create(proto) {
	function F() {}
	F.prototype = proto
	return new F()
}
