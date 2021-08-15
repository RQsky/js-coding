/**
 * 洗牌算法：
 * 1. 生成一个0到arr.length-1的随机数
 * 2. 交换该随机数位置元素和数组的最后一个元素，并把该随机位置的元素放入结果数组中
 * 3. 生成一个0～arr.length-2的随机数
 * 4. 交换该随机数位置元素和数组的倒数第二个元素，并把该随位置的元素放入结果数组中
 * 以此类推，直至取完所需的n个元素
 */
function xipai(arr, size) {
	let result = []
	for (let i = 0; i < size; i++) {
		let index = Math.floor(Math.random() * (arr.length - i))
		result.push(arr[index])
		;[arr[index], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[index]]
	}
	return result
}
