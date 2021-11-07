
/**
 * 2장 Test 6
 * 
 * 외부 모듈인 nconf를 이용해 환경변수 확인하기
 */


var nconf = require('nconf');

nconf.env();

console.log('OS 환경변수의 값 : %s', nconf.get('OS'));

