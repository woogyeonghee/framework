/**
 * 모듈에 대해 알아보기
 * 
 * 모듈 사용 패턴
 * user11.js 모듈 파일 불러들임
 *
 * @date 2016-11-10
 * @author Mike
 */

// 사용 패턴 : exports의 속성 이름을 주면서 추가하되 프로토타입 객체를 정의한 후 할당함

var User = require('./user11').User;
var user = new User('test01', '소녀시대');

user.printUser();
