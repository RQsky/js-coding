/**
 * 获取两个数组的交集
 * 方法1：哈希表
 * 方法2：先排序，然后双指针
 * 方法3：JS炫技流
 */
function intersection(arr1, arr2) {
	let tempArr = [] // 存储交集数组
	let tempArr2 = [].concat(arr2) // 拷贝arr2数组，后续splice()操作tempArr2，这是因为有的说法讲究要不改变传入的参数
	arr1.forEach(item => {
		let i = tempArr2.indexOf(item)
		if (i > -1) {
			tempArr.push(item) // 公共元素加进去
			tempArr2.splice(i, 1) // 从tempArr中移除该元素
		}
	})
	return tempArr
}

// 测试
let arr1 = [1, 6, 6, 3, 5]
let arr2 = [1, 2, 6, 8, 3]
console.log(intersection(arr1, arr2)) // [1, 6, 3]
