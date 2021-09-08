// 父类
function Animal(name) {
	this.name = name
	this.getName = function () {
		return this.name
	}
}

// 子类
function Dog(name) {
	Animal.call(this, name)
}

let dog = new Dog('xiaohuang')
console.log(dog.name, dog.getName())
// 'xiaohuang' 'xiaohuang'
