// const namesList = new Array('Option 1', 'Option2');
// const names = ['John', 'Daniel', 'David'];

// console.log(names);
// console.log(names.length);
// console.log(names[names.length - 1]);

// let firstName = names[0];

// console.log(names[0].toUpperCase());


// names[0, 1] = 'July';
// names = [1, 2, 3, 4];

// console.log(names);

// const fruits = ['apple', 'banana', 'orange'];

// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(`Index: ${i}, value: ${fruits[i]}`);
// //     fruits[i] = 'pineapple';
// // }

// // console.log(fruits);


// for (const fruit of fruits) {
//     console.log(fruit);
// }

// const array = [1, 2, 3, 4, 'a', 'b', true, 4321];

// for (const element of array) {
//     if (typeof element === 'number') {
//         console.log(element);
//     } else {
//         console.log(`element ${element} is not a number`);
//     }
// }

// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number') {
//         console.log(array[i]);
//     } else {
//         console.log(`element with index ${i} - ${array[i]} - is not a number`);
//     }
// }

// const array1 = [10, 20, 30];
// const array2 = array1;

// console.log(array1);
// console.log(array2);

// array1[0] = 1000;
// array2[2] = 3000;
// console.log(array1);
// console.log(array2);


// const sentence = "Це речення має кілька слів";
// const words = sentence.split('');
// console.log(words); // ["Це", "речення", "має", "кілька", "слів"]


// const fruits = ["яблуко", "банан", "полуниця"];
// const fruitString = fruits.join(", ");
// console.log(fruitString);

// const numbers = [10, 20, 30, 40, 50, 10, 10, 'a', 'b', 'c'];
// const index = numbers.indexOf(10, 3);
// console.log(index);

// for (let i = 0; i < numbers.length; i++) {
//     let index = numbers.indexOf(10, i);
//     if (index !== -1) {
//         console.log(numbers[index]);
//     }
// }

// const colors = ["червоний", "blue", "синій"];
// const hasGreen = colors.includes("зелений");
// console.log(hasGreen); // true

// const stack = [1, 2];
// stack.push(3, 5, 6, 7);
// console.log(stack); // [1, 2, 3, 4]

// const stack = [1, 2, 3, 4];
// const poppedValue = stack.pop();
// console.log(poppedValue); // 4
// console.log(stack); // [1, 2, 3]

// const queue = ["A", "B", "C"];
// const shiftedValue = queue.shift();
// console.log(shiftedValue); // "A"
// console.log(queue); // ["B", "C"]

// const queue = ["B", "C"];
// queue.unshift("A");
// console.log(queue); // ["A", "B", "C"]

// const numbers = [1, 2, 3, 4, 5];
// const slicedArray = numbers.slice(); // [3, 4, 5]
// console.log(slicedArray);

// const colors = ["червоний", "зелений", "синій"];
// colors.splice(2, 1);
// console.log(colors);

// const array1 = [1, 2];
// const array2 = [3, 4];
// const concatenatedArray = array1.concat(array2);
// console.log(concatenatedArray); // [1, 2, 3, 4]

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index) => {
//     console.log(number * 2);
//     console.log('Index:' + index);
// });


// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(evenNumbers);

// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumber = numbers.find((number) => number % 2 === 0);
// console.log(firstEvenNumber);

// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumberIndex = numbers.findIndex((number) => number % 2 === 0);
// console.log(firstEvenNumberIndex);

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// function multiply(number) {
//     return number * 2;
// }


// const numbers = [1, 5, 10, 2, 3, 6, 7, 8, 9, 81, 82, 805];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse(); // [5, 4, 3, 2, 1]

// const numbers = [1, 2, 3, 4, 5, 10];
// const sum = numbers.reduce((accumulator, number) => accumulator * number, 100); // 15
// console.log(sum);

// const numbers = [8, 2, 6, 4, 2];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0); // true
// const allNumbersAreEven = numbers.every((number) => number % 2 === 0); // true
// console.log(hasEvenNumber);
// console.log(allNumbersAreEven);

// let words = ['apple', 'banana', 'pineapple', 'orange', 'grape'];

// let minLength = 6;

// let filteredWords = words.filter(word => word.length > minLength);
// console.log(filteredWords);


// let numbers = [10, 20, 30, 4, 5, 55];
// let allPositive = numbers.every(number => number > 0);
// console.log(allPositive);

// const array1 = [10, 20, 30];
// const array2 = array1;

// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = array1.slice();
// const copiedArray = [].concat(array1);
// const copiedArray = structuredClone(array1);
// array1[0] = 100;

// console.log(copiedArray);

// const set = new Set(); // Порожній об'єкт Set
// const setFromArray = new Set([1, 2, 3, 3, 4, 4, 5]); // Створення з масиву
// console.log(setFromArray);

// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// matrix.push([10, 11, 12]);

// console.log(matrix);
// // console.log(matrix[2][2]);

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
//     console.log('____');
// }

