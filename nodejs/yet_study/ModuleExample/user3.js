/**
 * 모듈에 대해 알아보기
 * 
 * module.exports에 객체 직접 할당하기
 *
 * @date 2016-11-10
 * @author Mike
 */

// 객체를 그대로 할당할 수 있음
var user = {
	getUser: function() {
		return {id:'test01', name:'소녀시대'};
	},
	group:{id:'group01', name:'친구'}
}
	
module.exports = user;
