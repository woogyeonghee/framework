/**
 * 5장 Test 8
 * 
 * http 모듈로 웹 클라이언트 만들기
 * 
 * POST 방식으로 요청하기
 */

var http = require('http');

var opts = {
    host: 'www.google.com',
    port: 80,
    method: 'POST',
    path: '/',
    headers: {}
};


var resData = '';
var req = http.request(opts, function(res) {
	// 응답 처리
	res.on('data', function(chunk) {
		resData += chunk;
	});
	
	res.on('end', function() {
		console.log(resData);
	});
});

opts.headers['Content-Type'] = 'application/x-www-form-urlencoded';
req.data = "q=actor";
opts.headers['Content-Length'] = req.data.length;

req.on('error', function(err) {
    console.log("에러 발생 : " + err.message);
});

// 요청 전송
req.write(req.data);
req.end();
