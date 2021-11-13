/**
 * 5장 Test 5
 * 
 * http 모듈로 웹 서버 만들기
 * 
 * 이미지 파일 읽어 응답으로 전송하기
 */

var http = require('http');
var fs = require('fs');

// 웹서버 객체를 만듭니다.
var server = http.createServer();

// 웹서버를 시작하여 3000번 포트에서 대기하도록 합니다.
var port = 3000;
server.listen(port, function() {
	console.log('웹서버가 시작되었습니다. : %d', port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket) {
	console.log('클라이언트가 접속했습니다. : %s, %d', socket.remoteAddress, socket.remotePort);
});

// 클라이언트 요청 이벤트 처리
server.on('request', function(req, res) {
	console.log('클라이언트 요청이 들어왔습니다.');
	
	var filename = 'house.png';
	fs.readFile(filename, function(err, data) {
		res.writeHead(200, {"Content-Type": "image/png"});
		res.write(data);
		res.end();
	});
	  
});

// 서버 종료 이벤트 처리
server.on('close', function() {
	console.log('서버가 종료됩니다.');
});

