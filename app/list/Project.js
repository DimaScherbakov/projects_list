module.exports = function Project(name,desc,update){
	this.name = name || "no name";
	this.desc = desc || "no description";
	this.update = update || false;
}