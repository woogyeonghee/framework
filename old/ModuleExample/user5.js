/**
 * 모듈에 대해 알아보기
 * 
 * exports와 module.exports 동시 사용해보기
 *
 * @date 2016-11-10
 * @author Mike
 */

// module.exports가 사용되면 exports는 무시됨

module.exports = {
	getUser: function() {
		return {id:'test01', name:'소녀시대'};
	},
	group:{id:'group01', name:'친구'}
}

exports.group = {id:'group02', name:'가족'};
