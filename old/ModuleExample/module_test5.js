/**
 * 모듈에 대해 알아보기
 * 
 * user5.js 모듈 파일 불러오기
 *
 * @date 2016-11-10
 * @author Mike
 */

// require() 메소드는 exports가 아닌 module.exports로 설정된 속성을 리턴함
var user = require('./user5');

function showUser() {
	return user.getUser().name + ', ' + user.group.name;
}

console.log('사용자 정보 : %s', showUser());

