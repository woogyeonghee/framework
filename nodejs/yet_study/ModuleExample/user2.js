/**
 * 모듈에 대해 알아보기
 * 
 * exports에 객체 직접 할당해보기
 * 메인 파일에서 불러오기하면 할당되지 않는 문제 발생함
 *
 * @date 2016-11-10
 * @author Mike
 */

// user1.js의 코드는 exports에 객체를 할당하는 것과 같으나, exports에는 속성만 추가할 수 있고 객체를 할당할 수는 없음
// Reason : exports는 속성으로, exports에 속성을 추가하면 모듈에서 접근하지만,
//          exports에 객체를 할당하면 자바스크립트에서 새로운 변수로 처리함
exports = {
	getUser: function() {
		return {id:'test01', name:'소녀시대'};
	},
	group: {id:'group01', name:'친구'}
}
