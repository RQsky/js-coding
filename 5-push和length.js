/**
 * 美团面试题
 * 考点：对象的push()方法，和length属性。
 */
var obj = {
	2: 3,
	3: 4,
	length: 2,
	push: Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
// {2: 1, 3: 2, length: 4, push: ƒ} 解析：因为对象的length为2,所以push 1 2 会覆盖2 3 的值

// 对比
var obj = {
	length: 2,
	push: Array.prototype.push
}
obj.push(1)
obj.push(2)
obj.push(3)
console.log(obj)
// {2: 1, 3: 2, 4: 3, length: 5, push: ƒ}
