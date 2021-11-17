/**
 * 모듈에 대해 알아보기
 * 
 * user15_1.js 모듈 파일을 불러와서 사용함
 * 인스턴스 객체를 반환하는 함수를 module.exports에 할당함
 *
 * @date 2016-11-10
 * @author Mike
 */

// 사용 패턴 : 함수를 실행하면 인스턴스 객체를 리턴함

// 생성자 함수

var User = require('./user15_1');

var createUser = function(location, id, name) {
	console.log('createUser() 호출됨 : ' + location);
	
	if (location == '서초동') {
		console.log('우리 동 주민이 맞습니다.');
	} else {
		throw new Error('Not proper location.');
	}
	
	return new User(id, name);
}

module.exports = createUser;
