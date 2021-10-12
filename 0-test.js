function smallFun(y) {
	let x = 10
	let aaa = () => {}
	aaa.toString = () => {
		return x + y
	}
	return aaa
}
console.log(smallFun(10)) //20
