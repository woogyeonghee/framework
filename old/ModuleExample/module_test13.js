/**
 * 모듈에 대해 알아보기
 * 
 * 모듈 사용 패턴
 * user13.js 모듈 파일 불러들임
 *
 * @date 2016-11-10
 * @author Mike
 */

// 모듈을 사용하는 경우 : module_test12.js 파일에서 별도 모듈 파일로 일부를 분리함

function print(parent, user) {
	console.log('print() 호출됨 : %s, %s, %s', parent, user.id, user.name);
}

var parent = '소녀시대의 엄마';

var User = require('./user13');


// 두번째 파라미터가 new 연산자를 이용해 만든 인스턴스 객체인 경우
print(parent, new User('user1', '소녀시대'));
