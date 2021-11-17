
/**
 * 4장 Test 13
 * 
 * FS 사용하기 : Non-Blocking IO
 */

var fs = require('fs');

//파일을 비동기식 IO 방식으로 읽어 들입니다.
fs.readFile('./package.json', 'utf8', function(err, data) {
	// 읽어 들인 데이터를 출력합니다.
	console.log(data);
});

console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');
