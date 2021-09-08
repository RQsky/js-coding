// 父类
function Animal() {
	this.colors = ['black', 'white']
}

// 子类，将父类实例作为子类原型
function Dog() {}
Dog.prototype = new Animal()
Dog.prototype.constructor = Animal

// 原型链继承问题1. 原型中的引用类型将被所有实例共享
// 问题2. 子类实例化时无法给父类传参
let dog1 = new Dog()
dog1.colors.push('brown')
let dog2 = new Dog()
console.log(dog2.colors)
