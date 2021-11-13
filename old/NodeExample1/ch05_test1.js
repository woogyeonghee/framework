/**
 * 5장 Test 1
 * 
 * http 모듈로 웹 서버 만들기
 * 
 */

var http = require('http');

// 웹 서버 객체를 만듭니다.
var server = http.createServer();

// 웹 서버를 시작하여 3000번 포트에서 대기하도록 합니다.
var port = 3000;
server.listen(port, function() {
	console.log('웹 서버가 시작되었습니다. : %d', port);
});

//웹 서버를 시작하여 192.168.0.5 IP와3000번 포트에서 대기하도록 만들고 싶다면 아래 코드를 참조합니다.
//var host = '192.168.0.5';
//var port = 3000;
//server.listen(port, host, '50000', function() {
//	console.log('웹 서버가 시작되었습니다. : %s, %d', host, port);
//});


