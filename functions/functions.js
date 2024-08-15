// function printSum(num1, num2) {
//     console.log(`The sum is ${num1 + num2}`);
// }

// printSum('Hello, world', 'FSfafs');

// function calculateSum(num1, num2) {
//     let sum = num1 + num2;
//     //return sum;
//     //return num1 + num2;
//     return `The sum is ${sum}`;
// }



// function sayHello() {
//     console.log('Hello');
// }

// function isGreaterThanTen(number) {
//     return number > 10;
// }
// sayHello();

// calculateSum(5, 10);
// calculateSum(55, 20);

// console.log(calculateSum(5, 10));
// console.log(isGreaterThanTen(5));
// console.log(isGreaterThanTen(15));



// const greet = function () {
//     console.log('Hello');
// }

// const calculateSum = function (num1, num2) {
//     return num1 + num2;
// }

// greet();

// calculateSum(10, 20);

// foo1();
// function foo1() {
//     console.log('test');
// }

// foo2();
// const foo2 = function () {
//     console.log('test2');
// }

// const add = a => a * a;

// console.log(add(10));

// function getRandomNumber(min, max) {
//     console.log('Before return');
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// //console.log(getRandomNumber(10, 20));

// // + - / *
// function calculate(number1 = 100, number2 = 200, action = '*') {

//     // let result = 0;
//     switch (action) {
//         case '+':
//             return number1 + number2;
//         case '-':
//             return number1 - number2;
//         case '*':
//             return number1 * number2;
//         case '/':
//             return number1 / number2;
//     }

//     // return result;

// }
// console.log(calculate(10, 20, '+'));
// console.log(calculate(10, 20, '-'));
// console.log(calculate(10, 20, '*'));
// console.log(calculate(10, 20, '/'));

// console.log(calculate());

// console.log(calculate(10, undefined, '+'));


// function sum(...numbers) {
//     let sum = 0;

//     for (let num of numbers) {
//         sum += num;
//     }

//     return sum;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 6

// function f(arg1, ...rest, arg2) { // arg2 після ...rest ?!
//     // error
//   }

// function f(a, b, ...theArgs) { // помилки не буде
//     // …
// }

// function myFun(a, b, ...manyMoreArgs) {
//     console.log("a - ", a);
//     console.log("b - ", b);
//     console.log("manyMoreArgs - ", manyMoreArgs);
// }

// myFun("one", "two", "three", "four", "five", "six");
// myFun(1, 422222, "raasras", "dasdsad", "five", "six", "six", "six", "six", "six");

// Console Output:
// a - one
// b - two
// manyMoreArgs - ["three", "four", "five", "six"]


// function sum() {
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }

//     return total;
// }

// console.log(sum(2, 4, 6, 10, 10)); // виведе 12


// let globalValue = 'I am global';

// function someFunction() {
//     let localValue = 'I am local';
//     let globalValue = 'I am global-local';
//     console.log(globalValue);
//     console.log(localValue);

// }





// //console.log(localValue);

// someFunction();
// console.log('-------------------');
// console.log(globalValue);

// let userName = 'Anna';

// function showMessage() {
//     userName = 'Alex';
//     console.log(`Hello ${userName}`);
// }

// showMessage(); // Hello, Alex

// console.log(userName) // Alex



function withdraw(amount, balance) {
    if (amount === 0) {
        console.log("Для проведення операції введіть суму більшу за нуль");
    } else if (amount > balance) {
        console.log("Недостатньо коштів на рахунку");
    } else {
        console.log("Операція зняття коштів проведена успішно");
    }
}

withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операція зняття коштів проведена успішно"

// function withdraw(amount, balance) {
//     if (amount === 0) {
//         console.log("Для проведення операції введіть суму більшу за нуль");
//         return;
//     }
//     if (amount > balance) {
//         console.log("Недостатньо коштів на рахунку");
//         return;
//     }
//     console.log("Операція зняття коштів проведена");
// }

withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операція зняття коштів проведена"