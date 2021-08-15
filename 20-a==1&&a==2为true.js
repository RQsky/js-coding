/**
 * 实现 a==1 && a==2 && a==3 为 true
 * 原理：当复杂数据类型与基本数据类型作比较会发生隐式类型转换，调用toString()或valueOf()方法。所以可以改写这两个方法
 */
// a是数组
var a = [1, 2, 3]
a.toString = a.shift
console.log(a == 1 && a == 2 && a == 3)

// a是对象
var a = {
	value: 1,
	toString: function () {
		return a.value++
	}
}
console.log(a == 1 && a == 2 && a == 3)
