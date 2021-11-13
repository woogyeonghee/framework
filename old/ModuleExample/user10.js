/**
 * 모듈에 대해 알아보기
 * 
 * module.exports에 프로토타입을 정의한 후 할당
 *
 * @date 2016-11-10
 * @author Mike
 */

// 사용 패턴 : module.exports에 프로토타입 객체를 정의한 후 할당함

// 생성자 함수
function User(id, name) {
	this.id = id;
	this.name = name;
}

User.prototype.getUser = function() {
	return {id:this.id, name:this.name};
}

User.prototype.group = {id:'group1',name:'친구'};

User.prototype.printUser = function() {
	console.log('user 이름 : %s, group 이름 : %s', this.name, this.group.name);
}

module.exports = User;
