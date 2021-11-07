/**
 * 2장 Test 5
 * 
 * 모듈
 * 더하기 함수를 모듈로 분리한 calc.js 모듈 파일을 불러들임
 * 모듈 파일의 exports가 불러들인 객체라고 생각하면 됨
 */

var calc = require('./calc');
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));


var calc2 = require('./calc2');
console.log('모듈로 분리한 후 - calc2.add 함수 호출 결과 : %d', calc2.add(10, 10));

