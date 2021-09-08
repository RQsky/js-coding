/**
 * 先构造继承
 * 再拷贝原型链
 * 再原型链继承
 * Object.create(原型对象)，创建一个新对象，参数作为它的原型对象。
 *
 */
function Animal(name) {
	this.name = name
}

function Dog() {
	Animal.call(this, 'dog')
	this.age = 3
}

Animal.prototype.type = 'ob'
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog

let dog = new Dog()
console.log(dog.name, dog.age, dog.type)
