//1
process.on('exit', function() {
	console.log('exit 이벤트 발생함.');
});

setTimeout(function() {
	console.log('2초 후에 시스템 종료 시도함.');
	
	process.exit();
}, 2000);

//2
process.on('tick', function(count) {
	console.log('tick 이벤트 발생함 : %s', count);
});

setTimeout(function() {
	console.log('2초 후에 tick 이벤트 전달 시도함.');
	
	process.emit('tick', '2');
}, 2000);

//on
//once
//removeListener