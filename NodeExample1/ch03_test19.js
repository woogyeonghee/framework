/**
 * 3장 Test 18
 * 
 * bind 사용하기
 */

var calc = {};
calc.hitCount = 0;
calc.add = function(a, b, callback) {
	var result = a + b;
	callback(result);
	
	this.hitCount++;
	
	console.log('add 함수의 컨텍스트');
	console.dir(this);
}

function onAddSuccess(result) {
	console.log('onAddSuccess() 함수 호출됨.');
	console.log('onAddSuccess() 함수의 컨텍스트.');
	console.dir(this);
	
	console.log('더하기 (10, 10)의 결과 : %d', result);
	console.log('더하기의 결과 : %d, 조회 횟수 : %s', result, this.hitCount);
};


calculate = function (method, a, b) {
	console.log('calculate() 함수 호출됨.');
	
	if (method == 'add') {
		calc.add(a, b, onAddSuccess);
	}
}

calculate2 = function (method, a, b) {
	console.log('calculate2() 함수 호출됨.');
	
	if (method == 'add') {
		calc.add(a, b, onAddSuccess.bind(calc));
	}
}


calculate('add', 10, 10);
calculate2('add', 10, 10);
calculate2('add', 10, 10);

