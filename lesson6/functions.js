// function sayHello() {
//     console.log('Hello!');
//     console.log('World!');
// }

// sayHello();
// sayHello();
// sayHello();
// sayHello();

// function printSum(num1, num2) {
//     let result = num1 + num2;
//     console.log(`Sum is ${result}`);
// }

// printSum(10, 30);

// function getSum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// console.log(getSum(10, 20));

// let additionalResult = getSum(20, 30) + 50;
// console.log(additionalResult);

// const sayHello = function () {
//     console.log('Hello!');
// }

// sayHello();

// const sayHello = () => {
//     console.log('Hello!');
// }

// sayHello();

// const getSum = (a, b) => {
//     return a + b;
// }

// console.log(getSum(10, 20));

// const getDoubled = num => num * 2;

// console.log(getDoubled(10));

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// console.log(getRandomNumber(10, 100));
// console.log(getRandomNumber(100, 200));
// console.log(getRandomNumber(-10, 0));

// function divideNumbers(number, divider) {
//     if (divider === 0) {
//         throw new Error('It is impossible to divide by zero');

//     } else {
//         return number / divider;
//     }
// }

// try {
//     const result = divideNumbers(10, 0);
//     console.log(result);
// } catch (error) {
//     console.error('Error happened', error.message);
// }

// console.log(divideNumbers(10, 0));

// let globalVariable = 'I am global';

// console.log(globalVariable);

// function someFunction() {
//     console.log(globalVariable);
//     let localFunctionVariable = 'I am local (in function)';

//     if (true) {
//         let localIfVariable = 'I am local (in IF)';
//         console.log(globalVariable);
//         console.log(localFunctionVariable);
//         console.log(localIfVariable);
//     }
// }
// someFunction();

// const greet = function (name = 'Anonymous') {
//     console.log(`Hello, ${name}`);
// }

// greet('Admin');

// function sum(num1 = 5, num2 = 10) {
//     console.log(num1 + num2);
// }

// sum(undefined, 200);

// function sum(...numbers) {
//     console.log(numbers);
// }

// sum(10, 20, 30, 40, 50, 100, 200);

// function sum(num1, num2, num3) {
//     console.log(arguments);
// }
// sum(10, 20, 30, 40);