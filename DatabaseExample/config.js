
/*
 * 설정 파일
 *
 * - 서버 기본 정보 (포트 등)
 * - 데이터베이스 기본 정보 (접속 URL 등)
 * - 데이터베이스 스키마
 * - 라우팅 함수
 *
 * @date 2016-11-10
 * @author Mike
 */

// 사용자 관련 모듈 불러오기
var user = require('./routes/user2');

module.exports = {
	server_port: 3000,
	db_url: 'mongodb://localhost:27017/local',
	db_schemas: [
	    {file:'./user_schema', collection:'users3', schemaName:'UserSchema', modelName:'UserModel'}
	],
	initRoutes: function(app) {
		console.log('initRoutes() 호출됨.');
		
		//===== 사용자 관련 라우팅 =====//
		
		// 로그인 처리 함수 라우팅
		app.post('/process/login', user.login);

		// 사용자 추가 함수 라우팅
		app.post('/process/adduser', user.adduser);

		// 사용자 리스트 함수 라우팅
		app.post('/process/listuser', user.listuser);

		//=======================//
		
	}
}