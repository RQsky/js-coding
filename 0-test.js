// 内存管理
var n = 3
var neicun = [
	[2, 4],
	[3, 8],
	[4, 16]
]
var m = 4
var flag = 0
var use = [7, 9, 11, 4]
// ------------
// bag = [4,  4,  8,  8, 8, 16, 16, 16, 16]。最好把bag建成二维数组。
// 每一项是[容量，是否第一次被使用]
// 最后只要统计没被使用过的，不然不知道哪些没使用过。
var bag = []
for (let i = 0; i < n; i++) {
	var temp = Array(neicun[i][0]).fill(neicun[i][1])
	bag = bag.concat(temp)
}
for (let i = 0; i < m; i++) {
	var cur = use[i]
	let j = 0
	for (j; j < bag.length; j++) {
		if (cur < bag[j][0]) {
			bag[j][0] -= cur
			if (bag[j][1]) bag[j][1] = false
			// TODO 给bag排序
			break
		}
	}
	if (j == bag.length) {
		flag = -1
		break
	}
}
if (flag == -1) return -1
let count = 0
// 计数
for (let i = 0; i < bag.length; i++) {
	if (bag[i][1]) count++
}
return count
