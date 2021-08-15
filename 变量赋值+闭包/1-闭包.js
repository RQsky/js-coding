/**
 * 考点：闭包，很简单了。
 */
var n = 0
function a() {
	var n = 10
	function b() {
		console.log(++n)
	}
	b()
	return b
}
var c = a()
c()
console.log(n) // 11 12 0
