/*Написать класс Dog, который наследуется от класcа Animal. Класс Animal имеет метод getName (name можно передать в конструктор). Класс Dog имеет метод bark (возвращает строку «Dog {dogname} is barking».
Пример использования:
var dog = new Dog('Aban');
dog.getName() === 'Aban'; // true
dog.bark() === 'Dog Aban is barking'; // true*/
//----------------------------------------
function Animal () {
	this.getName = function () {
	return this.name
	}
}

function Dog (name) {
	this.name = name;
	this.bark = function () {
	return 'Dog ' + this.name + ' is barking';
	}
}

Dog.prototype = new Animal();
var dog = new Dog('QWERTY');
console.info(dog.getName());
console.info(dog.bark());