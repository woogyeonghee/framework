/**
 * 모듈에 대해 알아보기
 * 
 * 프로토타입의 생성자 함수를 만들어 module.exports에 할당함
 *
 * @date 2016-11-10
 * @author Mike
 */

// 사용 패턴 : 프로토타입을 할당. 생성자 함수를 실행하면 인스턴스 객체를 리턴함

// 생성자 함수

var User = function (id, name) {
	this.id = id;
	this.name = name;
}

module.exports = User;
