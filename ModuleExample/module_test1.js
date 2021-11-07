/**
 * 모듈에 대해 알아보기
 * 
 * user1.js 모듈 파일 불러오기
 *
 * @date 2016-11-10
 * @author Mike
 */

// require() 메소드는 exports 객체를 리턴함
var user = require('./user1');

function showUser() {
	return user.getUser().name + ', ' + user.group.name;
}

console.log('사용자 정보 : %s', showUser());

