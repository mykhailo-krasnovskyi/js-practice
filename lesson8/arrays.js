// const namesList = ['John', 'Alex', 'Sam', 'New'];
// const years = [2011, 2022, 2050];
// const array = [10, 20, 30, 'Hello', true];
// console.log(namesList);
// console.log(namesList[0]);
// console.log(namesList[1]);
// console.log(namesList[2]);

// let firstName = namesList[0].toUpperCase();
// console.log(firstName);
// console.log(namesList.length);
// console.log(namesList[namesList.length - 1]);

// namesList[4] = 'Hello';
// console.log(namesList);

// const fruits = ['apple', 'banana', 'orange', 'pineapple'];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(`Id: ${i}, fruit is ${fruits[i]}`);
// }

// for (const fruit of fruits) {
//     console.log(fruit);
// }

// const array = [10, 20, 30, 'Hello', true, false, 50, 60, 70];

// for (const element of array) {
//     if (typeof element === 'number') {
//         console.log(element);
//     }
// }

// let a = 10;
// const b = a;
// a = 100;
// console.log(a);
// console.log(b);

// const array1 = [10, 20, 30];
// const array2 = array1;

// console.log(array1);
// console.log(array2);

// array1[0] = 100;
// array2[2] = 300000;
// console.log(array1);
// console.log(array2);


// const sentence = "Це речення має кілька слів";
// const words = sentence.split("");
// console.log(words);

// const fruits = ["яблуко", "банан", "полуниця"];
// const fruitString = fruits.join(" | ");
// console.log(fruitString); // "яблуко, банан, полуниця"

// const numbers = [10, 20, 30, 40, 50, 30, 30];
// const index = numbers.indexOf(60);
// console.log(index); // 2

// const colors = ["червоний", "зелений", "синій"];
// const hasGreen = colors.includes("зелений");
// console.log(hasGreen); // true

// const stack = [1, 2];
// stack.push(3, 4, 5, 6);
// console.log(stack);

// const stack = [1, 2, 3, 4];
// const poppedValue = stack.pop();
// console.log(poppedValue); // 4
// console.log(stack); // [1, 2, 3]

// const queue = ["A", "B", "C"];
// const shiftedValue = queue.shift();
// console.log(shiftedValue); // "A"
// console.log(queue); // ["B", "C"]

// const queue = ["B", "C"];
// queue.unshift("A", "AA", "AAA");
// console.log(queue); // ["A", "B", "C"]

// const numbers = [1, 2, 3, 4, 5];
// const slicedArray = numbers.slice(2); // [3, 4, 5]
// console.log(numbers);
// console.log(slicedArray);

// const colors = ["червоний", "зелений", "синій"];
// colors.splice(0, 1, "жовтий", "оранжевий");
// console.log(colors); // ["червоний", "жовтий", "оранжевий", "зелений", "синій"]

// const array1 = [1, 2];
// const array2 = [3, 4];
// const concatenatedArray = array1.concat(array2);
// console.log(concatenatedArray); // [1, 2, 3, 4]

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, i) => {
//     console.log(number * 2);
//     console.log('Index ' + i);
// });

// numbers.forEach(function (num) {
//     console.log(num * 2);
// })

// const numbers = [1, 2, 3, 4, 5, 7, 9];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const evenNumbers2 = numbers.filter(function (num) {
//     return (num % 2 === 0);
// })

// console.log(evenNumbers);

// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumber = numbers.find((number) => number % 2 === 0);
// console.log(firstEvenNumber);

// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumberIndex = numbers.findIndex((number) => number % 2 === 0);

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);


// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months); //  ["Dec", "Feb", "Jan", "March"]

// const numbers = [5, 6, 1, 9, 11, 15, 16, 22];
// numbers.sort((a, b) => b - a);
// console.log(numbers);


// let startString = 'Hello World!';
// let reversedString = startString.split('').reverse();
// console.log(reversedString);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 15
// console.log(sum);

// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0); // true

// console.log(hasEvenNumber);

// const numbers = [2, 4, 6, 7, 10];
// const allEvenNumbers = numbers.every((number) => number % 2 === 0); // false
// console.log(allEvenNumbers);


// const originalArray = [1, 2, 3, 4, 5];

// const copiedArray = originalArray.slice();

// originalArray.push(10);
// console.log(originalArray);
// console.log(copiedArray);

// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = [].concat(originalArray);


// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = [...originalArray];

// const array1 = [10, 20, 30];
// const array2 = structuredClone(array1);

// console.log(array2);

// const set = new Set();
// const setFromArray = new Set([1, 2, 3, 3, 4, 4, 5]);

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.log(matrix[1][1]);

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(`${i}x${j}, value = ${matrix[i][j]}`);
//     }
// }