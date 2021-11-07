/**
 * 3장 Test 8
 * 
 * 배열 만들고 요소 추가하기
 */

var Users = [{name:'소녀시대',age:20},{name:'걸스데이',age:22}];

Users.push({name:'티아라',age:23});

console.log('사용자 수 : %d', Users.length);
console.log('첫번째 사용자 이름 : %s', Users[0].name);
