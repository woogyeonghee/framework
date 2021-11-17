/**
 * 미들웨어에서 요청 객체에 들어있는 헤더와 파라미터 확인하기
 * 웹브라우저에서 아래 URL로 요청해야 함
 *
 * http://localhost:3000?name=mike
 *
 * @date 2016-10-25
 * @author Mike
 */

// Express 기본 모듈 불러오기
var express = require('express')
  , http = require('http');

// 익스프레스 객체 생성
var app = express();

// 미들웨어에서 헤더와 파라미터 확인
// 아래 코드에서 파라미터는 GET 요청에 대해서만 처리 가능함 (POST는 req.body 객체 참조)
app.use(function(req, res, next) {
	console.log('첫번째 미들웨어에서 요청을 처리함.');
	
	var userAgent = req.header('User-Agent');
	var paramName = req.query.name;
	
	res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
	res.write('<h1>Express 서버에서 응답한 결과입니다.</h1>');
	res.write('<div><p>User-Agent : ' + userAgent + '</p></div>');
	res.write('<div><p>Param name : ' + paramName + '</p></div>');
	res.end();
});


// Express 서버 시작
http.createServer(app).listen(3000, function(){
  console.log('Express 서버가 3000번 포트에서 시작됨.');
});


