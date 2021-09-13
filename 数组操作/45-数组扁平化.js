const arr = [1, [2, [3, [4, 5]]], 6]

// 1. flat(想要展平的次数)
const res = arr.flat(Infinity)

// 2. 正则

// 3. 遍历递归。可以用reduce(), 也可以普通遍历
const flatten = arr => {
	return arr.reduce((pre, cur) => {
		return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
	}, [])
}
const res = flatten(arr)

// test
console.log(res)
