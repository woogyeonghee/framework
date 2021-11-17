/**
 * 모듈에 대해 알아보기
 * 
 * user14_1.js 모듈 파일을 불러와서 사용함
 * 인스턴스 객체를 반환하는 함수를 module.exports에 할당함
 *
 * @date 2016-11-10
 * @author Mike
 */

// 사용 패턴 : 외부 모듈을 불러와 new 연산자로 인스턴스 객체를 만들어 리턴하는 함수를 정의함

var User = require('./user14_1');

var createUser = function(id, name) {
	return new User(id, name);
}

module.exports = createUser;
