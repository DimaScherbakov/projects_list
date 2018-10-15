var sha256 = require('sha256');

var users = [{name:'petro',pass:sha256('123'),cat:'admin'},
{name:'vasyl',pass:sha256('321'),cat:'auth'}];

function getCurUser(name,pass) {
		for(var user in users){
		if(name === users[user].name && pass === users[user].pass){
			var curUser = users[user];
			return curUser;
		}
	}
}

function getUserCatByName(uName){
	var answer = users.filter( function(item){
		return item.name == uName;
		});

	return answer[0]? answer[0].cat : 'guest';
}

function pushUser(name,pass,cat){
	users.push({name:name,pass:pass,cat:cat});
	
	return users;
}

module.exports.getCurUser = getCurUser;
module.exports.getUserCatByName = getUserCatByName;
module.exports.pushUser = pushUser;
