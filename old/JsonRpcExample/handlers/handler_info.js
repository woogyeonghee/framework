
/*
 * 핸들러 모듈 파일에 대한 정보
 * 
 */

console.log('handler_info 파일 로딩됨.');

var handler_info = [
	{file:'./echo', method:'echo'}					// echo  
	,{file:'./echo_error', method:'echo_error'}		// echo_error       
	,{file:'./add', method:'add'}					// 더하기
	,{file:'./multiply', method:'multiply'}			// 곱하기
	,{file:'./listuser', method:'listuser'}			// 사용자 리스트
	,{file:'./echo_encrypted', method:'echo_encrypted'}			// 암호화된 echo
];



module.exports = handler_info;

