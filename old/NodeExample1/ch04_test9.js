
/**
 * 4장 Test 9
 * 
 * FS 사용하기 : 파일의 일부 내용 읽어들이기
 */

var fs = require('fs');

//파일에서 데이터를 읽어 들입니다.
fs.open('./output.txt', 'r', function(err, fd) {
    if(err) throw err;
    
    var buf = new Buffer(10);
    console.log('버퍼 타입 : ', Buffer.isBuffer(buf));
    
    fs.read(fd, buf, 0, buf.length, null, function(err, bytesRead, buffer) {
        if(err) throw err;
        
        var inStr = buffer.toString('utf8', 0, bytesRead);
        console.log('파일에서 읽은 데이터  : %s', inStr);
        
        console.log(err, bytesRead, buffer);
        
        fs.close(fd, function() {
        console.log('output.txt 파일을 열고 읽기 완료.');
    });
  });
});
