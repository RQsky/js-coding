/**
 * 阿里面试题
 * JS 中 A=B=C,应该B=C先生效, 然后才是A=B。
 * 所以这个题考的是：
 * - 如果B=C中，a指针的指向被修改（由原来a = { n: 1 }修改为a = { n: 2 }）。
 * - 那么A=B中，修改a指向对象的属性，修改的是原来的对象？还是a指向的新对象？
 * - 答案是修改的是原对象。原因是：js内部为了保证赋值语句的正确，会在一条赋值语句执行前，先把所有要赋值的引用地址取出一个副本，再依次赋值。
 * - 参考：https://www.jianshu.com/p/010c88d445b5
 */
let a = { n: 1 }
let b = a
a.x = a = { n: 2 }
console.log(a.x) // undefined
console.log(b) // {n: 1, x: {n: 2}}
