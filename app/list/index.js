var project = require('./Project');

var projects = [{name:'calculator' , desc:'calculator for your home countings',access:['guest'],update:['admin']},
				{name:'calculator2' , desc:'calculator for your home countings2',access:[''],update:['']},
			{name:'teapot' , desc:'app shows cafes nearby',access:['auth'],update:['auth']},
		{name:'teleportator 3000' , desc:'moves you to any point on the Earth',access:['auth'],update:['']}
		];
var usAc;
/*
user = {
	name,
	pass,
	cat
}
function returns list of projects for current user
*/

function getProjectsList(userAccess){
	var list=[];
	usAc = userAccess;
	for (proj in projects){
		var projToList = projects[proj];
		if(userAccess == 'admin'){
			list.push( new project(name = projToList.name,
									desc=projToList.desc,
									update= true))}
		else if( projToList.access.some( isUser ) ){
			list.push(new project(name=projToList.name,
							  desc=projToList.desc,
							  update=projToList.update.some( function(item){return item === userAccess;} ) 
							  ) 
			);
		}
	}
}

function isUser(item){
	return (item === usAc || item === 'guest');
}

module.exports = getProjectsList;
