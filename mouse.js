function Mouse(name, age) {
	this.name = name;
	this.age = age;
	this.die = false;
};

Mouse.prototype.die = () => {
	this.die = true
};

module.exports = Mouse;
