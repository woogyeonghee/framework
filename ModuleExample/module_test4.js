/**
 * 모듈에 대해 알아보기
 * 
 * user4.js 모듈 파일 불러오기
 *
 * @date 2016-11-10
 * @author Mike
 */

// require() 메소드는 함수를 리턴함
var user = require('./user4');

function showUser() {
	return user().name + ', ' + 'No Group';
}

console.log('사용자 정보 : %s', showUser());

