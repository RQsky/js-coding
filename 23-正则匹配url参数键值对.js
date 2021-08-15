/**
 * 1. '/' 是正则表达式的开始和结尾符号
 * 2. 'g' 表示匹配所有
 * 3. 其他真不知道，还是背吧。口诀：小括号，中括号+=中括号+，方问与井
 * 4. 默写：/([^?&#]+=[^?&#]+)/g
 *
 * TODO 除此之外还有两道正则题，太难了我就没看
 * 1. 查找字符串中出现最多的字符和个数
 * 2. 解析 URL Params 为对象
 */
let reg = /([^?&#]+=[^?&#]+)/g
let str =
	'https://c2b.brightoilonline.com/bdh5/channel.html?chelun_params=ad0bb3e5fc3b3bfeb9b53cc9686eb1aaaecb8a53e9f4a77c5ed68714123b25913219200cba48d9044c7b48325436960f42c1cde18f349ef63ab53ee791970243a8ba79f9a2dc8aa1#/chelunGasList?pcode=c2b8g717rkj603o15005&fromApp=true'

console.log(str.match(reg))
// 测试结果：["chelun_params=ad0bb3e5fc3b3bfeb9b53cc9686eb1aaaecb…f42c1cde18f349ef63ab53ee791970243a8ba79f9a2dc8aa1", "pcode=c2b8g717rkj603o15005", "fromApp=true"]

str = 'https://c2b-test2.brightoilonline.com/bdh5/channel.html#/chelungaslist?pcode=c2b0293jm44x97an6339&fromApp=true'
console.log(str.match(reg))
// 测试结果： ["pcode=c2b0293jm44x97an6339", "fromApp=true"]

str = 'https://c2b-test2.brightoilonline.com/bdh5/channel.html?pcode=c2b0293jm44x97an6339&fromApp=true'
console.log(str.match(reg))
// 测试结果： ["pcode=c2b0293jm44x97an6339", "fromApp=true"]
