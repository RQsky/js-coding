/**
 * Object.is() 方法判断两个值是否为同一个值。
 * 主要解决2个问题
 * - +0 === -0 , true , 理应为false
 * - NaN === NaN, false, 理应为true
 */
const is = (x, y) => {
	if (x === y) return x !== 0 || y !== 0 || 1 / x === 1 / y
	else return x !== x && y !== y
}
