
var nconf = require('nconf');

nconf.env();

console.log('OS 환경변수의 값 : %s', nconf.get('OS'));

//npm install nconf --save
//npm init -> json(다른 컴퓨터에서 사용)