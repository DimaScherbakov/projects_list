var project = require('./Project');
var projects = [{name:"calculator" , desc:"calculator for your home countings",access:["guest"],update:["guest"]},
				{name:"calculator2" , desc:"calculator for your home countings2",access:[""],update:[""]},
			{name:"teapot" , desc:"app shows cafes nearby",access:["auth","guest"],update:["auth"]}];
/*
user = {
	name,
	pass,
	cat
}
function returns list of projects for current user
*/

function getProjectsList(userAccess){
	if (userAccess === "admin"){return projects};
	var list=[];
	for (proj in projects){
		var projToList = projects[proj];
		// console.log(projects[proj]);
		if(projToList.access.some(function(item){
			//console.log(item);
			return (item === userAccess || item == "guest");
		})){
		list.push(new project(name=projToList.name,
			desc=projToList.desc,
			update=projToList.update.some(function(item){return item === userAccess;})));
		}
	}
	// return JSON.stringify(list);
	return list;
}

module.exports = getProjectsList;
