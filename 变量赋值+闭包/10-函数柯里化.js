/**
 * 题目：设计一个函数，可以多次接收、任意数量的参数，alert时顺便求和。
 * 解法：add()里嵌套了一个foo()函数，闭包。args就是记忆元素，老数组。
 * - foo()的功能是把新数组叠加到老数组
 * - 改写foo()函数的toString()方法，可以调用reduce()把args逐项相加。
 * - NOTE 技巧就是把...args作为形参，那么args就是所有参数组成的数组。
 * - XXX 破案了，console不会触发toString()方法，alert和document.write()会
 */
let add = (...args) => {
	let foo = (...newArgs) => {
		args.push(...newArgs) // 别把push() 的参数写成数组了
		return foo
	}
	foo.toString = () => {
		return args.reduce((pre, el) => pre + el)
	}
	return foo
}

// 测试结果：
console.log(add(1, 2, 3)(4)(5)) // 15
