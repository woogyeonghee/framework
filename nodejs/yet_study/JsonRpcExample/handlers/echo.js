
/*
 * echo RPC 함수
 * 
 */

// echo 함수
var echo = function(params, callback) {
	console.log('JSON-RPC echo 호출됨.');
	console.dir(params);
	
	callback(null, params);
};

module.exports = echo;

