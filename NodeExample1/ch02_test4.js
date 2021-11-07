/**
 * 2장 Test 4
 * 
 * 모듈
 * 더하기 함수가 메인 자바스크립트 파일에 같이 들어있는 경우
 */

var calc = {};
calc.add = function(a, b) {
	return a + b;
}

console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));

