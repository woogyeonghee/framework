/**
 * 모듈에 대해 알아보기
 * 
 * exports에 단순히 함수를 할당하는 모듈
 *
 * @date 2016-11-10
 * @author Mike
 */

// 사용 패턴 : exports에 속성으로 추가된 함수 객체를 그대로 참조한 후 호출함

exports.printUser = function() {
	console.log('user 이름은 소녀시대입니다.');
};
