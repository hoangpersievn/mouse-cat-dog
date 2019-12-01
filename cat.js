function Cat(name, age){

	this.name = name;
	this.age = age;
	this.tomach = [];
}

Cat.prototype.eat = (mouse) => {
	this.tomach.push(mouse)
};

module.exports = Cat;
