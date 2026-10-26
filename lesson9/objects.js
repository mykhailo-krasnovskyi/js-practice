// const person1 = new Object();
// const person = {
//     name: 'David',
//     age: 25
// }

// person.email = 'example@gmail.com';

// console.log(person);
// console.log(person.name);

// const personName = person.name;
// console.log(personName);
// delete person.name;
// console.log(person);

// const user = {
//     userName: 'user55',
//     role: 'admin',
//     email: 'user55@gmail.com',
//     printInfo: function () {
//         console.log(`userName: ${this.userName}; role: ${this.role}; email: ${this.email}`);
//     },
//     sayHello(anotherName) {
//         console.log((`Hello ${anotherName}, my name is ${this.userName}`));
//     },
//     sayGoodBye: (anotherName) => {
//         console.log(`Bye ${anotherName}, my name is ${this.userName}`);
//     }
// }
// user.sayGoodBye('William');
// user.sayHello('William');

// const name = 'Peter';
// let age = 30;

// const person = {
//     name,
//     age,
// }

// console.log(person);

// const person = {
//     name: 'John',
//     age: 19,
//     address: {
//         country: 'Ukraine',
//         city: 'Kyiv',
//         street: 'Main Str.',
//         house: 55,
//         phones: {
//             mobile: '111-111-111',
//             work: '222-222-222'
//         }
//     }
// }
// console.log(person.address.phones);
// console.log(person.address.phones.mobile);

// let propertyName = 'address';
// const person = {
//     name: 'John',
//     age: 100,
//     [propertyName]: 'New York'
// }

// console.log(person[propertyName]);

// const user = {
//     'user-name': 'User22',
//     'user age': 20,
// }

// console.log(user['user age']);

// const user = {
//     name: "John",
//     address: {
//         city: "New York",
//         zipcode: "10001"
//     }
// };


// // З оператором опціонального доступу
// const cityOptional = user?.address?.city;
// console.log(cityOptional); // "New York"

// console.log(user.phones.mobile); // Помилка : TypeError: Cannot read properties of undefined (reading 'mobile')
// console.log(user.phones?.mobile); // undefined

// const person = {
//     name: 'John',
//     age: 30,
//     email: 'test@example.com',
//     sayHello() {
//         console.log('Hello!');
//     }
// }

// for (const key in person) {
//     console.log(`key: ${key}, value: ${person[key]}`);
//     console.log(person.hasOwnProperty());
// }



// const user = {
//     email: 'useremailrandom@emal.com',
//     gender: null
// };

// const userEmail = user.email ?? 'default@email.com';
// const userName = user.name ?? 'Гість';
// const userGender = user.gender ?? 'Невідомо';

// console.log(userEmail); // "useremailrandom@emal.com"
// console.log(userName); // "Гість"
// console.log(userGender); // "Невідомо"

// let animalPrototype = {
//     type: 'animal',
//     greet() {
//         console.log('Hello, I am an animal');
//     }
// }

// let animalCat = Object.create(animalPrototype);
// animalCat.name = 'Cat Cat';

// let animalDog = Object.create(animalPrototype);

// console.log(animalCat);
// console.log(animalCat.type);

// for (const key in animalCat) {
//     console.log(key);
// }
// console.log(animalCat.hasOwnProperty('type'));
// console.log(animalDog.type);

// const person = {
//     name: 'David',
//     age: 25
// }

// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// const people = [
//     { name: 'Alice', age: 5 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 66 }
// ]

// people.push({ name: 'David', age: 40 });
// // console.log(people);

// for (const person of people) {
//     console.log(person.name);
// }

// console.log('-------------');

// people.forEach(person => console.log(`Name: ${person.name}, age: ${person.age}`));
// const adultPeople = people.filter(person => person.age >= 18);
// console.log(adultPeople);
// const user = {
//     name: 'User',
//     age: 30,
//     email: 'test@test.com',
//     country: 'USA',
//     city: 'Miami',
// }

// const { name: userName, age: userAge, email, country, city = 'New York' } = user;

// console.log(city);

// const user = {
//     name: 'User',
//     age: 30,
//     email: 'test@test.com',
//     country: 'USA',
//     city: 'Miami',
// }

// function printData({ name, age, email }) {
//     console.log(name);
//     console.log(age);
//     console.log(email);
// }

// printData(user);
// printData({ age: 50, email: 'hello@test.com', name: 'Sam' });

// const user2 = user;
// user.name = 'UserNew';
// console.log(user2);

// const myMap = new Map();
// myMap.set('key1', 'value1')
// console.log(myMap('key1')); // 'value1'


// function greet() {
//     console.log(`Hello, ${this.name}!`);
// }

// const person = { name: 'Alice' };
// const person2 = { name: 'Bob' };

// greet.call(person2);

// function greet(timesOfDay, weather) {
//     console.log(`Good ${timesOfDay}, ${this.name}! It's ${weather} today.`);
// }

// const person = { name: 'Bob' };
// greet.apply(person, ['morning', 'sunny']); // Виведе: Good morning, Bob! It's sunny today.


// function greet() {
//     console.log(`Hi, I'm ${this.name}`);
// }

// const person = { name: 'Charlie' };
// const greetPerson = greet.bind(person);
// greetPerson(); // Виведе: Hi, I'm Charlie