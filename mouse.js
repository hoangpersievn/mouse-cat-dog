function Mouse(name, age) {
	this.name = name;
	this.age = age;
	this.die = false;
};

Mouse.prototype.died = function(){
	this.die = true
};

module.exports = Mouse;
