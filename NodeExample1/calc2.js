/**
 * 2장
 * 
 * 계산기 모듈
 * 더하기 함수가 들어있는 calc 모듈 중 add 함수를 분리한 경우
 */

var calc = {};

calc.add = function(a, b) {
	return a + b;
};

module.exports = calc;
