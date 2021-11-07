
/**
 * 4장 Test 4
 * 
 * 프로토타입 객체를 만들고 EventEmitter를 상속하도록 하기
 */

var Calc = require('./calc3');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title + '에 stop 이벤트 전달함.');

