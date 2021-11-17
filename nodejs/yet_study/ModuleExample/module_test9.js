/**
 * 모듈에 대해 알아보기
 * 
 * 모듈 사용 패턴
 * user9.js 모듈 파일 불러들임
 *
 * @date 2016-11-10
 * @author Mike
 */

// 사용 패턴 : exports의 속성 이름을 주면서 추가하되 인스턴스 객체를 만들어 할당함

var user = require('./user9').user;

user.printUser();
