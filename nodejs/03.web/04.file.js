//1
var fs = require('fs');

// 파일을 동기식 IO 방식으로 읽어 들입니다.
var data = fs.readFileSync('./package.json', 'utf8');

// 읽어 들인 데이터를 출력합니다.
console.log(data);

//2
var fs = require('fs');

//파일을 비동기식 IO 방식으로 읽어 들입니다.
fs.readFile('./package.json', 'utf8', function(err, data) {
	// 읽어 들인 데이터를 출력합니다.
	console.log(data);
});

console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');


//3
var fs = require('fs');

//파일에 데이터를 씁니다.
fs.writeFile('./output.txt', 'Hello World!', function(err) {
	  if(err) {
		  console.log('Error : ' + err);
	  }
	  
	  console.log('output.txt 파일에 데이터 쓰기 완료.');
});


//4
var fs = require('fs');

//파일에 데이터를 씁니다.
fs.open('./output.txt', 'w', function(err, fd) {
    if(err) throw err;

    var buf = new Buffer('안녕!\n');
    fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
	    if(err) throw err;
	    
	    console.log(err, written, buffer);
	    
	    fs.close(fd, function() {
	      console.log('파일 열고 데이터 쓰고 파일 닫기 완료.');
	    });
	});
});

//5
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

//6
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


//7
var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function (exists) {
    if (exists) {
    	fs.unlink(outname, function (err) {
    		if (err) throw err;
    		console.log('기존 파일 [' + outname +'] 삭제함.');
    	});
    }
    
    var infile = fs.createReadStream(inname, {flags: 'r'} );
	var outfile = fs.createWriteStream(outname, {flags: 'w'});

	infile.pipe(outfile);
	console.log('파일 복사 [' + inname + '] -> [' + outname + ']');
});



//'r'
//'w'
//'w+'
//'a+'