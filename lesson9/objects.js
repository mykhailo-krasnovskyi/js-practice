// const person = new Object();

// person.name = 'David';
// person.age = 30;

// const person = new Object('name','John');
// console.log(person);

// const person = {
//     name: 'David',
//     age: 30
// }

// console.log(person.name);
// console.log(person.age);

// person.age = 50;
// console.log(person);

// person.address = 'New York, Main str.';
// console.log(person);

// delete person.name;

// console.log(person);

// const person = {
//     name: 'David',
//     age: 30,
//     sayHello() {
//         console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old.`);
//     },
//     getName() {
//         return this.name;
//     },
//     // sayGoodbye: (anotherName) => {
//     //     console.log(`Goodbye, ${anotherName}. My name ${this.name}`)
//     // }
// }

// person.sayHello();

// person.sayGoodbye('Admin');

// const name = 'Peter';
// const age = 20;

// const user = {
//     name,
//     age
// }

// console.log(user);

// const person = {
//     name: 'John',
//     age: 55,
//     address: {
//         street: 'Main street',
//         city: 'Kyiv',
//         country: 'Ukraine',
//         phones: {
//             mobile: '555-555-555',
//             home: '66-66-66',
//             work: '123'
//         }
//     }
// }

// console.log(person);
// console.log(person.address);
// console.log(person.address.phones);
// console.log(person.address.phones.work);

// Computed Property

// let propertyName = 'apartment';

// const person = {
//     name: 'Daniel',
//     street: 'Shevshenko',
//     building: '50A',
//     [propertyName]: 55
// }

// console.log(person);


// const user = {
//     'user age': 100,
//     'user email': 'test@gmail.com',
//     'user-first-name': 'Mike'
// }
// console.log(user['user age']);
// console.log(user['user-first-name']);

// const user = {
//     name: 'John',
//     age: 50,
//     email: 'test@gmail.com'
// };

// // for (const key in user) {
// //     console.log(`Key: ${key}, Value: ${user[key]}`);
// // }
// console.log(user.hasOwnProperty('password'));
// console.log(user.hasOwnProperty('email'));



// const user = {
//     email: 'useremailrandom@emal.com',
//     gender: null
// };

// const userEmail = user.email ?? 'default@email.com';
// const userName = user.name ?? 'Anonym';
// const userGender = user.gender ?? 'Unknown';

// console.log(userEmail); // "useremailrandom@emal.com"
// console.log(userName); // "Гість"
// console.log(userGender); // "Невідомо"


// const animal = {
//     legs: 4,
// };


// const dog = Object.create(animal);
// dog.name = "Duke";

// console.log(dog.legs);


// // Використання for...in для перебору ключів об'єкта dog
// for (let key in dog) {
//     // Перевіряємо, чи властивість належить самому об'єкту dog
//     if (dog.hasOwnProperty(key)) {
//         console.log(`Key: ${key}, Value: ${dog[key]}`);
//     }
// }

// const car = {
//     brand: 'BMW',
//     model: '10',
//     maxSpeed: 200,
//     price: 40000
// }

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));


// Object.keys(car).forEach(key => console.log(`Key is ${key}, value is ${car[key]}`));

// const users = [
//     { userName: 'alice', userEmail: 'alice@gmail.com', isBlocked: true },
//     { userName: 'dan', userEmail: 'dan@gmail.com', isBlocked: false },
//     { userName: 'admin', userEmail: 'admin@gmail.com', isBlocked: false },
// ]

// users.push({ userName: 'sue', userEmail: 'sue@gmail.com', isBlocked: false });
// // console.log(users);

// for (const user of users) {
//     console.log(user.userName);
// }

// users.forEach(user => console.log(user.isBlocked));

// const car = {
//     brand: 'BMW',
//     model: '10',
//     maxSpeed: 200,
//     price: 40000
// }

// const { brand: brandName, model, maxSpeed, price = 10000 } = car;
// console.log(brandName);
// console.log(model);
// console.log(maxSpeed);
// console.log(price);


// const car1 = {
//     brand: 'BMW',
//     model: '10',
//     maxSpeed: 200,
//     price: 40000
// }

// const car2 = {
//     brand: 'Toyota',
//     model: '50',
//     maxSpeed: 200,
//     price: 30000
// }

// function printCarData(car) {
//     console.log(`brand: ${car.brand}, model: ${car.model}, maxSpeed: ${car.maxSpeed}, price: ${car.price}`);
// }

// function printCarD({ brand, model, maxSpeed, price }) {
//     console.log(`brand: ${brand}, model: ${model}, maxSpeed: ${maxSpeed}, price: ${price}`);
// }

// function printSum({ number1, number2 }) {
//     console.log(number1 + number2);
//     console.log(number1);
//     console.log(number2);
// }


// printSum({ number2: 20, number1: 10 });

// printCarD(car1);


// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 }
// ];

// for (const { name, age } of people) {
//     // console.log(`${name} is ${age} years old`);
//     console.log(age);
// }

// const person = { name: "John", age: 30 };
// const newPerson = { ...person, gender: "male" };

// console.log(newPerson);


// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8)); // 10


// let obj1 = {
//     name: 'person1',
//     age: 100
// }

// let obj2 = structuredClone(obj1);

// console.log(obj1);
// console.log(obj2);
// obj2.age = 200;

// console.log(obj1);
// console.log(obj2);

// const myMap = new Map();
// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');
// myMap.set('key3', 'value3');
// myMap.set('key2', 'value4');

function greet(age) {
    console.log(`Hello, ${this.name}! I am ${age} y.o.`);
}

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };
// greet.call(person1, 20);
// greet.call(person2, 30);

// greet.apply(person1, [20]);
// greet.apply(person2, [330]);

const greetPerson1 = greet.bind(person1, 40);
const greetPerson2 = greet.bind(person2, 50);

greetPerson1();
greetPerson2();