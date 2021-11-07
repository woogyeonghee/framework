/**
 * 4장 Calc3
 * 
 * 모듈
 * 더하기 함수가 들어있는 calc3 모듈
 */

var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Calc = function() {
	var self = this;
	
	this.on('stop', function() {
		console.log('Calc에 stop event 전달됨.');
	});
};

util.inherits(Calc, EventEmitter);

Calc.prototype.add = function(a, b) {
	return a + b;
}

module.exports = Calc;
module.exports.title = 'calculator';
