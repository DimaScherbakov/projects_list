var projects = [{name:"calculator" , desc:"calculator for your home countings",cats:["guest"]},
				{name:"calculator2" , desc:"calculator for your home countings2",cats:[""]},
			{name:"teapot" , desc:"app shows cafes nearby",cats:["auth","guest"]}];
/*
user = {
	name,
	pass,
	cat
}
function returns list of projects for current user
*/
function getProjectsList(userCat){
	if (userCat === "admin"){return projects};
	var list=[];
	for (proj in projects){
		// console.log(projects[proj]);
		if(projects[proj].cats.some(function(item){
			console.log(item);
			return item === userCat;
		})){
		list.push(projects[proj]);
		}
	}
	// return JSON.stringify(list);
	return list;
}

module.exports = getProjectsList;