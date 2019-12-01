function Cat(name, age){

	this.name = name;
	this.age = age;
	this.tomach = [];
}

Cat.prototype.eat = function(mouse) {
	this.tomach.push(mouse)
};

module.exports = Cat;
