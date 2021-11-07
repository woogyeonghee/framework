
/*
 * 계산기 기능 RPC 함수
 * 
 */

// 곱하기 함수
var multiply = function(params, callback) {
	console.log('JSON-RPC multiply 호출됨.');
	console.dir(params);
	
	// 파라미터 체크
	if (params.length < 2) {  // 파라미터 부족
		callback({
            code: 400,
            message: 'Insufficient parameters'
        }, null);
		
		return;
	}
	
	
	var a = params[0];
	var b = params[1];
	var output = a * b;
    
	callback(null, output);
};


module.exports = multiply;

