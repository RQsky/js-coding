/**
 * 题目：设计一个函数，可以多次接收、任意数量的参数，把他们存起来。然后调用sum()方法可以求和。
 * 解法：add()里嵌套了一个foo()函数，这应该是个闭包。args就是记忆元素，老数组。
 * - 这是可以重复调用的，每个add()返回的都是foo()，每个foo()返回的也是foo()。
 * - foo()的功能是把新数组叠加到老数组
 * - foo()函数还有个sum()方法，可以调用reduce()把args逐项相加。
 * - NOTE 技巧就是把...args作为形参，那么args就是所有参数组成的数组。
 */
let add = (...args) => {
	let foo = (...newArgs) => {
		return add(...args, ...newArgs)
	}
	foo.toString = () => {
		return args.reduce((pre, el) => pre + el)
	}
	return foo
}

// 测试结果：
console.log(add(1, 2, 3)) // 15
// console.log(add(1)(2, 3)(4)(5).sum()); // 15
