//1
function add(a, b) {
	return a + b;
}

var result = add(10, 10);

console.log('더하기 (10, 10) : %d', result);

//2
var add = function (a, b) {
	return a + b;
};

var result = add(10, 10);

console.log('더하기 (10, 10) : %d', result);


//3
var Person = {};

Person['age'] = 20;
Person['name'] = '소녀시대';
Person.add = function(a, b) {
	return a + b;
};

console.log('더하기 : %d', Person.add(10,10));

//4
var Person = {};

Person['age'] = 20;
Person['name'] = '소녀시대';

var oper = function(a, b) {
	return a + b;
};

Person['add'] = oper;

console.log('더하기 : %d', Person.add(10,10));

//5
var Person = {
	age: 20,
	name: '소녀시대',
	add: function(a, b) {
		return a + b;
	}
};

console.log('더하기 : %d', Person.add(10,10));