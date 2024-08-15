// function firstFunction() {
//     console.log('Inside first function');
//     secondFunction();
// }

// function secondFunction() {
//     console.log('Inside second function');
//     thirdFunction();
// }

// function thirdFunction() {
//     console.log('Inside third function function');
//     console.log('Call stack is:', new Error());

// }

// firstFunction();

// const hof = (callback) => {
//     console.log('Inside HOF');
//     callback();
// }

// const sayHi = () => {
//     console.log('Hi');
// }

// const sayBye = () => {
//     console.log('Bye');
// }

// hof(sayHi);
// hof(sayBye);

// const hof = (callback, message) => {
//     console.log('Inside HOF');
//     callback(message);
// }

// const saySomething = (text) => {
//     console.log(`The text is ${text}`);

// }

// hof(saySomething, 'test string');

// function processPayment(onSuccessCb, onFailureCb, paymentId) {
//     const isSuccess = true;
//     if (isSuccess) {
//         onSuccessCb(paymentId);
//     } else {
//         onFailureCb(paymentId);
//     }
// }

// function onPaymentSuccess(paymentId) {
//     console.log(`Payment ${paymentId} is successful`);
// }

// function onPaymentFailure(paymentId) {
//     console.log(`Payment ${paymentId} is failed`);
// }

// let id = "41215215125512";
// processPayment(onPaymentSuccess, onPaymentFailure, id);

// const person = {
//     name: 'Alice',
//     age: 24,
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}, I'm ${this.age} y.o. `)
//     }
// }

// const person2 = {
//     name: 'Bob',
//     age: 24,
//     greetParent: function () {
//         let greet = () => {
//             console.log(`Hello, my name is ${this.name}, I'm ${this.age} y.o. `)
//         }
//         greet();
//     }
// }

//person.greet();
// person2.greetParent();

//Call
// function greet() {
//     console.log(`Hi, my name is ${this.name}`);
// }

// greet.call(person);
// greet.call(person2);
// greet();

//Apply
// function greet(greetingText) {
//     console.log(`${greetingText} ${this.name}`);
// }

// greet.apply(person, ['Hello, my name is ']);
// greet.apply(person2, ['Hello, my name is ']);

//Bind
// function greet() {
//     console.log(`Hi, my name is ${this.name}`);
// }

// const greetPerson1 = greet.bind(person);
// const greetPerson2 = greet.bind(person2);

// greetPerson1();
// greetPerson2();

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.printData = function () {
//         console.log(`${this.title} was written by ${this.author} in ${this.year}`);
//     }
// }

// const book1 = new Book('Harry Potter', 'Rowling', '1993');
// const book2 = new Book('Book 2', 'Author 2', '2000');

// book1.printData();
// book2.printData();

// (function sayHello(name) {
//     console.log(`Hello ${name}`)
// })('Test');

function counter(num) {
	if (num >= 0) {
		console.log(num);
		num--;
		counter(num);
	}
}
counter(5);

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log('-----------');
// console.log(counter2());
// console.log(counter2());

// function multiplier(factor) {
//     return function (x) {
//         return x * factor;
//     };
// }

// let double = multiplier(2);

// let triple = multiplier(3);
// console.log(double(1)); // Виведе 10
// console.log(double(2));
// console.log(double(3));
// console.log(double(4));
// console.log(double(5));
// console.log(double(6));

// console.log('-----------');

// console.log(triple(1));
// console.log(triple(2));
// console.log(triple(3));

// function countToTen(startValue) {
//     for (let i = startValue; i < 10; i++) {
//         console.log(i);
//     }
// }

// countToTen(5);

// function countToTenRecursions(startValue) {

//     if (startValue < 10) {
//         console.log(startValue);
//         countToTenRecursions(startValue + 1);
//     }

// }

// countToTenRecursions(5);

// function factorial(n) {
//     // Базовий випадок: факторіал 0 або 1 = 1
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         // Рекурсивний випадок: факторіал числа n = n * факторіал (n - 1)
//         return n * factorial(n - 1);
//     }
// }

// // Приклад виклику рекурсивної функції для обчислення факторіалу 5
// const result = factorial(5);
// console.log(result); // Виведе 120

// function traverse(node) {
//     console.log(node.value);
//     node.children.forEach(child => {
//         traverse(child); // Рекурсивний виклик для кожного дочірнього вузла
//     });
// }

// const tree = {
//     value: 1,
//     children: [
//         {
//             value: 2,
//             children: []
//         },
//         {
//             value: 3,
//             children: [
//                 {
//                     value: 4,
//                     children: []
//                 },
//                 {
//                     value: 5,
//                     children: []
//                 }
//             ]
//         }
//     ]
// };

// traverse(tree);

async function fetchTemperature(city) {
	const apiKey = 'bd664c238b837a54a22ee16796bbea50';
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	const response = await fetch(apiUrl);
	const data = await response.json();
	console.log(data);
	return data;
}

const city = 'Kharkiv';
fetchTemperature(city)
	.then((data) => {
		if (data !== null) {
			console.log(`Current temp in city ${city}: ${data.main.temp}°C`);
		}
	})
	.catch((e) => {
		console.log(e);
	});
