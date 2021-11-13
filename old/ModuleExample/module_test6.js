/**
 * 모듈에 대해 알아보기
 * 
 * 모듈 파일을 어떻게 불러들여 사용하는 것인지 이해하기
 * 모듈 파일로 분리하기 전의 코드
 *
 * @date 2016-11-10
 * @author Mike
 */

// 가상으로 require() 함수를 정의해 보면 require() 함수가 내부적으로 처리되는 방식을 이해할 수 있음
var require = function(path) {
	var exports = {
		getUser: function() {
			return {id:'test01', name:'소녀시대'};
		},
		group:{id:'group01', name:'친구'}
	}
	
	return exports;
}

var user = require('...');

function showUser() {
	return user.getUser().name + ', ' + user.group.name;
}

console.log('사용자 정보 : %s', showUser());

