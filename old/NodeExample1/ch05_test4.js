/**
 * 5장 Test 4
 * 
 * server 객체를 만들면서 응답 데이터를 전송할 콜백 함수를 바로 만들기
 */

var http = require('http');

// 웹서버 객체를 만듭니다. - 클라이언트 요청을 처리하는 콜백 함수를 파라미터로 전달합니다.
var server = http.createServer(function(req, res) {
	console.log('클라이언트 요청이 들어왔습니다.');
	
	res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("  <head>");
	res.write("    <title>응답 페이지</title>");
	res.write("  </head>");
	res.write("  <body>");
	res.write("    <h1>노드제이에스로부터의 응답 페이지</h1>");
	res.write("  </body>");
	res.write("</html>");
	res.end();
});

// 웹서버를 시작하여 3000번 포트에서 대기하도록 합니다.
var port = 3000;
server.listen(port, function() {
	console.log('웹서버가 시작되었습니다. : %d', port);
});

// 클라이언트 연결 이벤트 처리
server.on('connection', function(socket) {
	console.log('클라이언트가 접속했습니다. : %s, %d', socket.remoteAddress, socket.remotePort);
});

// 서버 종료 이벤트 처리
server.on('close', function() {
	console.log('서버가 종료됩니다.');
});

