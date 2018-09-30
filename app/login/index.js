var users = [{name:"petro",pass:"123",cat:"admin"},
{name:"vasyl",pass:"321",cat:"auth"}];

function getCurUser(name) {
		for(var user in users){
		if(name === users[user].name){
			var curUser = users[user];
			return curUser;
		}
	}
}

module.exports = getCurUser;