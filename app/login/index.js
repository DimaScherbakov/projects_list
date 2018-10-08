var users = [{name:"petro",pass:"123",cat:"admin"},
{name:"vasyl",pass:"321",cat:"auth"}];

function getCurUser(name,pass) {
		for(var user in users){
		if(name === users[user].name && pass === users[user].pass){
			var curUser = users[user];
			return curUser;
		}
	}
		return undefined;
}

function getUserCatByName(uName){
console.log("getUSerCatByName works with arg: "+uName);
var answer = users.filter(function(item){
return item.name == uName;
});
console.log(answer);
return answer[0].cat;
}
module.exports.getCurUser = getCurUser;
module.exports.getUserCatByName = getUserCatByName;
