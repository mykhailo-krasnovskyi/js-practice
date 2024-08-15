// Створення об'єкта "прототипу"
const animalPrototype = {
	speak() {
		console.log(`${this.name} says ${this.sound}`);
	},
};

// Створення об'єкта, який успадковує прототип
const dog = {
	name: 'Dog',
	sound: 'Woof',
};
dog.__proto__ = animalPrototype;

// Виклик методу від успадкованого прототипу
dog.speak(); // Dog says Woof
