/**
 * 3장 Test 17
 * 
 * 클로저 : 리턴된 함수에서 자신을 만들어준 함수 내의 변수 접근
 */

function add(a, b, callback) {
	var result = a + b;
	callback(result);

	var count = 0;
	var history = function() {
		count++;
		return count + ' : ' + a + ' + ' + b + ' = ' + result; 
	};
	return history;
}

var history = add(10, 10, function(result) {
	console.log('파라미터로 전달된 콜백 함수 호출됨.');
	console.log('더하기 (10, 10)의 결과 : %d', result);
});

console.log('결과값으로 받은 함수 실행 결과 : ' + history());
console.log('결과값으로 받은 함수 실행 결과 : ' + history());
console.log('결과값으로 받은 함수 실행 결과 : ' + history());

