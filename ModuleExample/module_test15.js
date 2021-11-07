/**
 * 모듈에 대해 알아보기
 * 
 * 모듈 사용 패턴
 * user15_2.js 모듈 파일 불러들임
 *
 * @date 2016-11-10
 * @author Mike
 */

// 모듈을 사용하는 경우 : 모듈에서 인스턴스 객체를 할당하는데, 모듈 쪽으로 파라미터를 더 넘겨주어야 하는 경우
function print(parent, user) {
	console.log('print() 호출됨 : %s, %s, %s', parent, user.id, user.name);
}

var parent = '소녀시대의 엄마';

var location = '서초동';
var id = 'user1';
var name = '소녀시대';

var createUser = require('./user15_2');

print(parent, createUser(location, id, name));

