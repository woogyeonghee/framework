/**
 * 3장 Test 11
 * 
 * 배열 끝에 요소를 추가하거나 삭제하기
 * push()와 pop() 메소드 사용
 */

var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22}];

console.log('push() 호출 전 배열 요소의 수 : %d', Users.length);

Users.push({name:'티아라',age:23});

console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);

Users.pop();

console.log('pop() 호출 후 배열 요소의 수 : %d', Users.length);


