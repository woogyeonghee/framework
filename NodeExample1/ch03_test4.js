/**
 * 3장 Test 4
 * 
 * 익명 함수
 * 변수의 값으로 함수가 할당될 수 있음
 * 변수의 값으로 함수를 구분하므로 함수의 이름을 넣을 필요가 없음
 * 함수 선언문이 아니라 함수 표현식으로 추가함
 * 
 */

var add = function (a, b) {
	return a + b;
};

var result = add(10, 10);

console.log('더하기 (10, 10) : %d', result);

