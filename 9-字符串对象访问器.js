/**
 * 题目：有一个以字符串形式给出的对象访问器（可能包含数组），要求放回它访问的属性的值。
 * 解法：首先使用split()切分字符串，然后进入循环，循环里要考虑找不到以及属性值是数组的情况
 * - 然后使用[]进入下一层
 */
let obj = {
	a: '1',
	b: {
		ba: '2',
		bb: [
			{
				bba: '3'
			},
			'4'
		]
	}
}
let str = 'obj.b.bb[0].bba'
// let str = 'obj.b.bb[0]'
const get = function (str, obj) {
	const arr = str.split('.')
	// console.log(arr)
	let res
	if (arr[0] === 'obj') {
		res = obj
		for (let i = 1; i < arr.length; i++) {
			let char = ''
			let num = 0
			if (arr[i].charAt(arr[i].length - 1) === ']') {
				char = arr[i].slice(0, arr[i].length - 3)
				num = arr[i].charAt(arr[i].length - 2)
				if (!res[char] || !res[char][num]) {
					res = -1
					break
				}
				res = res[char][num]
			} else {
				if (!res[arr[i]]) {
					res = -1
					break
				} else {
					res = res[arr[i]]
				}
			}
		}
	} else {
		res = -1
	}
	return res
}
console.log(get(str, obj))
// console.log(obj.c)
