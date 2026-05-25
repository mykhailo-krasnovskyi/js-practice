// Function declaration

// function printHello() {
//     console.log('Hello from printHello function!');
//     console.log('---------------');
// }

// printHello();
// printHello();
// printHello();
// printHello();


// function printSum(num1, num2) {
//     console.log('Calculating sum....');
//     console.log(`The sum for ${num1} and ${num2} is ${num1 + num2}`);
// }

// printSum(10);

// printSum(1000, 700);


// function getSum(num1, num2) {
//     let result = num1 + num2;
//     return result;
//     console.log('AFTER RETURN');
// }

// let sum = getSum(10, 20) + 100;

// console.log(sum);

// function isNumberPositive(number) {
//     return number > 0;
// }

// console.log(isNumberPositive(100));
// console.log(isNumberPositive(-100));
// console.log(isNumberPositive(0));


// Function expression
// foo();

// function foo() {
//     console.log('test1');
// }

// greet();
// const greet = function () {
//     console.log('Hello!');
// }

// greet();

// Arrow functions

// const printSum = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(printSum(100, 100));

// const multiply = num => {
//     return num * num;
// }

// console.log(multiply(2));

// const multiply = num => num * num;

// console.log(multiply(2));

// function getSum1(num1, num2) {
//     return num1 + num2;
// }
// console.log(getSum1(10, 20));

// const getSum2 = function (num1, num2) {
//     return num1 + num2;
// }
// console.log(getSum2(9, 9));

// const getSum3 = (num1, num2) => num1 + num2;
// console.log(getSum3(600, 100));


// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (let i = 0; i < 100; i++) {
//     console.log(getRandomNumber(10, 20));
// }


// let globalVariable = 'I am global';

// function someFunction() {
//     console.log(globalVariable);
//     if (true) {
//         console.log(globalVariable);
//         if (true) {
//             console.log(globalVariable);
//         }
//     }
// }

// someFunction();

// let localVariable = 'fSfffs';

// function someFunction2() {
//     // let localVariable = 'I am local';
//     if (true) {
//         console.log(`From if: ${localVariable}`);
//     }
// }

// someFunction2();
// console.log(localVariable);


// function greet(userName = 'Anonymous') {
//     console.log(`Hello, ${userName}`);
// }

// greet();

// function sum(num1 = 5, num2 = 10) {
//     return num1 + num2;
// }

// console.log(sum(undefined, 50));

// function divideNumbers(a, b) {
//   if (b === 0) {
//     throw new Error("Ділення на нуль недопустиме!");
//   }
//   return a / b;
// }

function divideNumbers(num1, num2) {

    if (num2 === 0) {
        throw new Error('It is impossible to divide be zero');
    } else {
        return num1 / num2;
    }

}


try {
    const result = divideNumbers(10, 0);
    console.log(result);
    console.log('TRY BLOCK');
} catch (error) {
    console.error("Сталася помилка:", error.message);
    console.log('CATCH BLOCK');
}


console.log('GLOBAL BLOCK');