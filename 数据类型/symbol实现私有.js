function getObj() {
	const symbol = Symbol('test')
	const obj = {}
	obj[symbol] = 'test'
	return obj
}

const obj = getObj()

Object.keys(obj) // []
obj[Symbol('test')] // undefined

const [symbol] = Object.getOwnPropertySymbols(obj)
console.log(obj[symbol])
