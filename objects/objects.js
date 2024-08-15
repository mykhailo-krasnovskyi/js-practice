// const person = {
//     name: "David",
//     age: 53,
//     isAdult: true,
//     address: {
//         street: 'Main Str...',
//         houseNumber: 55,
//         phones: {
//             mobile: '000-0000',
//             phone: '111-1111',
//             work: {
//                 office: '424242',
//                 office2: '412412'
//             }
//         }

//     },
//     sayHello() {
//         console.log(`Hi, I'm ${this.name} `);
//     },
//     getName() {
//         return this.name;
//     },
//     calculateAge(age) {
//         return this.age - age;
//     },

// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const john = new Person("John", 30);

// const person1 = new Object("age", 30);

// console.log(person['age']);

// person.age = 31;

// person.address = 'New York';

// person.address = 'Chicago';

// console.log(person.getName());
// console.log(person.calculateAge(30));

// const age = 25;
// const name = "John"

// const person = {
//     name,
//     age
// };
// console.log(person.age); // 25
// console.log(person.name); // John

// const person = {
//     name: "David",
//     age: 53,
//     isAdult: true,
//     address: {
//         street: 'Main Str...',
//         houseNumber: 55,
//         phones: {
//             mobile: '000-0000',
//             phone: '111-1111',
//             work: {
//                 office: '424242',
//                 office2: '412412'
//             }
//         }

//     },
//     sayHello() {
//         console.log(`Hi, I'm ${this.name} `);
//     },
//     getName() {
//         return this.name;
//     },
//     calculateAge(age) {
//         return this.age - age;
//     },

// }

// let propertyName = "address";

// const person2 = {
//     name: 'John',
//     age: 30,
//     [propertyName]: 'Avenue',
//     "full-name": 'John Jonson',
// }

// console.log(person2[propertyName]);

// console.log(person2["full name"]);

// const user = {
//     name: "Max",
//     email: null,
// }

// console.log(user.address?.street);

// const user = {
//     name: "John",
//     address: {
//         city: "New York",
//         zipcode: "10001"
//     }
// };

// // Без оператора опціонального доступу
// console.log(user.phones.mobile);

// const user = {
//     email: 'useremailrandom@emal.com',
//     gender: null
// };

// const num = null;

// const result = num ?? 5;
// const userEmail = user.email ?? 'default@email.com';
// const userName = user.name ?? 'Гість';
// const userGender = user.gender ?? 'Невідомо';

// console.log(userEmail); // "useremailrandom@emal.com"
// console.log(userName); // "Гість"
// console.log(userGender); // "Невідомо"
// console.log(result);

// for (let key in person) {
//     console.log(typeof person[key]);
//     console.log(`${key} : ${JSON.stringify(person[key])}`);
// }

// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('site'));

// const people = [
//     { name: "John", age: 30 },
//     { name: "Jane", age: 25 },
//     { name: "Mike", age: 40 }
// ];

// people.push({ name: "Anna", age: 28 });

// for (const person of people) {
//     console.log(person.name);

// }

// const personNew = {

//     age: 30,
//     name: "John",
//     gender: "male",
//     address: 'USA'
// };

// const { name: newName, age = 40, gender } = personNew;

// function printData({ name, age, address }) {
//     console.log(`${name}, ${age}, ${address}`);
// }

// printData(personNew);

// const people = [
//     { name: "John", age: 30, address: 'assafasfas' },
//     { name: "Jane", age: 25, address: 'assafasfas' }
// ];

// for (const { name, age } of people) {
//     console.log(`${name} is ${age} years old`);
// }

// const personNewNew = {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         country: "USA"
//     }
// };

// const { name, address: { city, country } } = personNewNew;

// console.log(name); // "John"
// console.log(city); // "New York"
// console.log(country); // "USA"

// const numbers = [1, 2, 3];

// const [first, second, third] = numbers;

// console.log(first); // 1
// console.log(second); // 2
// console.log(third); // 3

// const numbers = [1, 2];

// const [first, second, third = 0] = numbers;

// console.log(first); // 1
// console.log(second); // 2
// console.log(third); // 0 (значення за замовчуванням)

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a); // 2
// console.log(b); // 1

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];

// console.log(newNumbers); // [1, 2, 3, 4, 5]

// const obj1 = {
//     val1: 50,
//     val2: 100
// }

// const obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// obj1.val1 = 150;

// console.log(obj1);
// console.log(obj2);

// const person = { name: "John", age: 30 };
// const newPerson = { ...person, gender: "male" };

// console.log(newPerson);
// { name: "John", age: 30, gender: "male" }

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10

// const array = [1, 2, 3, 4, 5];

// const [first, second, ...rest] = array;
// console.log(first); // 1
// console.log(second); // 2
// console.log(rest); // [3, 4, 5]

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];

// function add(...nums) {
//     return nums.reduce((total, num) => total + num, 0);
// }

// console.log(add(...numbers)); // 6

// const originalObject = {
//     name: 'John',
//     age: 30,
//     address: {
//         house: 542,
//         streetDeep: {
//             street: 'Cannedy Av',
//             obj3: {
//                 street3: 'Cannedy Av',
//             }
//         }

//     }
// };
// const copiedObject = { ...originalObject };

// console.log(copiedObject.address.streetDeep.obj3);

// Функція приймає один об'єкт параметрів
// function printUserInfo(user) {
//     console.log(`Name: ${user.name}`);
//     console.log(`Age: ${user.age}`);
//     console.log(`Gender: ${user.gender}`);
//     console.log(`Occupation: ${user.occupation}`);
// }

// // Використання функції з об'єктом параметрів
// const user = {
//     name: "John",
//     age: 30,
//     gender: "male",
//     occupation: "developer"
// };

// const user2 = {
//     name: "John",
//     age: 55,
//     gender: "male",
//     occupation: "developer"
// };
// printUserInfo(user2);

// const obj1 = {
//     prop1: 45,
//     prop2: 88,
// }

// Object.freeze(obj1);

// obj1.prop1 = 100;
// console.log(obj1.prop1);

// const originalObject = { name: 'John', age: 30 };
// const copiedObject = {};
// for (let key in originalObject) {
//     copiedObject[key] = originalObject[key];
// }

// console.log(copiedObject);

const myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
console.log(myMap);

console.log(myMap.has('key2'));

myMap.delete('key1');

console.log(myMap);
