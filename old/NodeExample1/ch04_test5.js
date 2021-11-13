
/**
 * 4장 Test 13
 * 
 * FS 사용하기
 */

var fs = require('fs');

// 파일을 동기식 IO 방식으로 읽어 들입니다.
var data = fs.readFileSync('./package.json', 'utf8');

// 읽어 들인 데이터를 출력합니다.
console.log(data);

