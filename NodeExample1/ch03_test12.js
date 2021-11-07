/**
 * 3장 Test 12
 * 
 * 배열 앞에 요소를 추가하거나 삭제하기
 * shift()와 unshift() 메소드 사용
 */

var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22}];

console.log('unshift() 호출 전 배열 요소의 수 : %d', Users.length);

Users.unshift({name:'티아라',age:23});

console.log('unshift() 호출 후 배열 요소의 수 : %d', Users.length);

Users.shift();

console.log('shift() 호출 후 배열 요소의 수 : %d', Users.length);


