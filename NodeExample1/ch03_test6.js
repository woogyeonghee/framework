/**
 * 3장 Test 6
 * 
 * 객체의 속성으로 함수 할당
 * 함수를 변수에 할당한 후 속성으로 할당할 수 있음
 */

var Person = {};

Person['age'] = 20;
Person['name'] = '소녀시대';

var oper = function(a, b) {
	return a + b;
};

Person['add'] = oper;

console.log('더하기 : %d', Person.add(10,10));