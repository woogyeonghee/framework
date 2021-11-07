
/**
 * 4장 Test 11
 * 
 * FS 사용하기 : 한 파일을 스트림으로 읽어 다른 파일에 쓰기
 */

var fs = require('fs');

var infile = fs.createReadStream('./output.txt', {flags: 'r'} );
var outfile = fs.createWriteStream('./output2.txt', {flags: 'w'});

infile.on('data', function(data) {
	console.log('읽어들인 데이터', data);
	outfile.write(data);
});

infile.on('end', function() {
  console.log('파일 읽기 종료.');
  outfile.end(function() {
    console.log('파일 쓰기 종료.');
  });
});
