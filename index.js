const Mouse = require('./mouse.js');
const Cat = require('./cat.js');

let tom = new Mouse('Tom', 19);
let mun = new Cat('Mun', 19);

mun.eat(tom);
tom.died();
console.log(mun);
