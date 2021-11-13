/**
 * 모듈에 대해 알아보기
 * 
 * 모듈 파일을 어떻게 불러들여 사용하는 것인지 이해하기
 * 모듈 파일로 분리한 후의 코드 (user7.js 파일 사용)
 *
 * @date 2016-11-10
 * @author Mike
 */

// 사용 패턴 : exports에 속성으로 추가된 함수 객체를 그대로 참조한 후 호출함

var printUser = require('./user7').printUser;

printUser();
