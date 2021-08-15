/**
 * 阿里面试题
 * 考点：变量提升，静态方法，实例方法，原型方法。
 * - 首先注意这三种说法，都是针对构造函数讲的。
 * - 实例方法：只有实例才能访问到的方法，用this.定义，不能通过Foo.调用
 * - 静态方法，定义模式如下，不能通过实例调用。
 * - 原型方法，定义模式如下，实例和构造函数都可以调用。
 * 另外，NOTE
 * - 第四条语句，使构造函数属性getName变成了全局变量。是因为调用Foo()时没有加new.这可以在构造函数中使用严格模式来避免。
 * - 操作符优先级：带参数的new > () = . > 无参数new
 * 参考：https://segmentfault.com/a/1190000007979730
 */
function Foo() {
	// 实例方法
	getName = function () {
		console.log(1)
	}
	return this
}
// 静态方法
Foo.getName = function () {
	console.log(2)
}
// 原型方法
Foo.prototype.getName = function () {
	console.log(3)
}
var getName = function () {
	console.log(4)
}
function getName() {
	console.log(5)
}

Foo.getName() // 2 静态方法
getName() // 4 解析：var和function都会提升，但function被提到var前面，也就是函数表达式（打印4的）会覆盖函数声明式方法（指打印5的那句）。
Foo().getName() // 1 调用函数自身的方法.首先执行Foo()，getName被重新赋值，这里不是重新定义getName，所以会改变全局getName,Foo()返回的this应该是window，window.getName()即执行全局getName()方法，打印1.
getName() // 1 解析: 前一行代码改变了getName
new Foo.getName() // 2 解析：相当于执行new (Foo.getName)(), Foo.getName就是一个普通方法，所以这里考的是new + 普通函数返回什么？答案是和不加new一样
new Foo().getName() // 3 实例调用原型方法, 相当于执行(new Foo()).getName()。new Foo()返回实例，所以这句话应该执行实例的getName()方法，可是Foo()的实例没有定义getName()方法【要this.xx才能定义】，所以这时候执行原型方法。
new new Foo().getName() // 3 解析：相当于执行new ((new Foo()).getName)(), 也就是new + 普通函数返回什么？答案是和不加new一样
