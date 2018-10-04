var users = [{name:"petro",pass:"123",cat:"admin"},
{name:"vasyl",pass:"321",cat:"auth"}];

function getCurUser(name,pass) {
		for(var user in users){
		if(name === users[user].name && pass === users[user].pass){
			var curUser = users[user];
			return curUser;
		}
	}
		return {name: "name or password is wrong,please try again."}
}

module.exports = getCurUser;
