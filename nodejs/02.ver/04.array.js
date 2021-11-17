//1
var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22}];

Users.push({name:'티아라',age:23});

console.log('사용자 수 : %d', Users.length);
console.log('첫번째 사용자 이름 : %s', Users[0].name);

//2
var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22}];

var add = function(a, b) {
	return a + b;
};

Users.push(add);
 
console.log('배열 요소의 수 : %d', Users.length);
console.log('세번째 요소로 추가된 함수 실행 : %d', Users[2](10,10));

//3
var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22},{name:'티아라',age:23}];

console.log('배열 요소의 수 : %d', Users.length);
for (var i = 0; i < Users.length; i++) {
	console.log('배열 요소 #' + i + ' : %s', Users[i].name);
} 

console.log('\nforEach 구문 사용하기');
Users.forEach(function(item, index) {
	console.log('배열 요소 #' + index + ' : %s', item.name);
});

//4
var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22}];

console.log('push() 호출 전 배열 요소의 수 : %d', Users.length);

Users.push({name:'티아라',age:23});

console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);

Users.pop();

console.log('pop() 호출 후 배열 요소의 수 : %d', Users.length);

//5
var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22}];

console.log('unshift() 호출 전 배열 요소의 수 : %d', Users.length);

Users.unshift({name:'티아라',age:23});

console.log('unshift() 호출 후 배열 요소의 수 : %d', Users.length);

Users.shift();

console.log('shift() 호출 후 배열 요소의 수 : %d', Users.length);

//6
var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22},{name:'티아라',age:23}];

console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d', Users.length);

delete Users[1];

console.log('delete 키워드로 배열 요소 삭제 후');
console.dir(Users);


Users.splice(1, 0, {name:'애프터스쿨',age:25});

console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.dir(Users);

Users.splice(2, 1);

console.log('splice()로 인덱스 1의 요소를 1개 삭제한 후');
console.dir(Users);

//7
var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22},{name:'티아라',age:23},{name:'애프터스쿨',age:25}];

console.log('배열 요소의 수 : %d', Users.length);
console.log('원본 Users');
console.dir(Users);

var Users2 = Users.slice(1, 3);

console.log('slice()로 잘라낸 후 Users2');
console.dir(Users2);

var Users3 = Users2.slice(1);

console.log('slice()로 잘라낸 후 Users3');
console.dir(Users3);
