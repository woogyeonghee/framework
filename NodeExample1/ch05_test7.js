/**
 * 5장 Test 7
 * 
 * http 모듈로 웹 클라이언트 만들기
 * 
 * GET 방식으로 요청하기
 */

var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/'
};

var req = http.get(options, function(res) {
    // 응답 처리
    var resData = '';
    res.on('data', function(chunk) {
    	resData += chunk;
    });
    
    res.on('end', function() {
	    console.log(resData);
	});
});

req.on('error', function(err) {
    console.log("에러 발생 : " + err.message);
});

