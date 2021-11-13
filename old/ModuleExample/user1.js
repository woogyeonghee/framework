/**
 * 모듈에 대해 알아보기
 * 
 * exports 객체 속성으로 추가하기
 *
 * @date 2016-11-10
 * @author Mike
 */

// exports 객체 속성으로 함수 추가
exports.getUser = function() {
	return {id:'test01', name:'소녀시대'};
}

// exports 객체 속성으로 객체 추가
exports.group = {id:'group01', name:'친구'};
