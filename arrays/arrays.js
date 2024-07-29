// const names = ['John', 1, true, 'Fox'];

// // const names2 = new Array('John', 'Max', 'Clara', 'Fox');

// // console.log(names);
// // console.log(names2);

// console.log(names[0]);
// // console.log(names.length);
// console.log(names[names.length - 1]);

// const firstName = names[0];
// const result = names[1] - 10;

// console.log(firstName);
// console.log(result);


// const animals = ['cat', 'dog', 'elephant'];

// for (let i = 0; i < animals.length; i++) {
//     console.log(`index ${i}, element ${animals[i]}`);
// }

// for (const animal of animals) {
//     console.log(animal);

// }


// const array1 = ['Dog', 'Person', 3, 4, 5, 6, true, false, 'House', 'Test', 7, 8];
// const array2 = [];

// for (let i = 0; i < array1.length; i++) {
//     if (typeof array1[i] === 'number') {
//         array2[array2.length] = array1[i];
//     }
// }

// for (const element of array1) {
//     if (typeof element === 'number') {
//         array2[array2.length] = element;
//     }
// }


// const array1 = ['String', 'String2', 'STRING3', 'string4'];
// const array2 = [];

// for (const string of array1) {
//     array2[array2.length] = string.toUpperCase();

// }



// console.log(array2);

// let seven = 7;
// const eight = 8;
// let sevenAgain = seven;

// seven = 77;
// console.log(sevenAgain)

// Присвоєння за посиланням (складні типи)
// const arrA = [1, 2, 3];
// const arrB = arrA; // Посилання на той самий масив
// arrA.push(4);
// console.log(arrA); // [1, 2, 3, 4]
// console.log(arrB); // [1, 2, 3, 4]

// const originalArray = [1, 2, 3, 4, 5];

// const copiedArray = originalArray.slice();
// originalArray.push(666);

// console.log(originalArray);
// console.log(copiedArray);

// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = [].concat(originalArray);


// const sentence = "Це реченнямаєкілька, слів";
// const words = sentence.split(",");
// console.log(words); // ["Це", "речення", "має", "кілька", "слів"]

// const fruits = ["яблуко", "банан", "полуниця"];
// const fruitString = fruits.join("");
// console.log(fruitString); // "яблуко, банан, полуниця"


// const fruits = ["яблуко", "банан", "полуниця"];
// fruits[0] = false;

// console.log(fruits);
// const numbers = [10, 20, 30, 30, 30, 40, 50];
// const index = numbers.indexOf('30');
// console.log(index); // 2


// const colors = ["червоний", "зелений", "синій"];
// const hasGreen = colors.includes("зелен2222ий");
// console.log(hasGreen); // true

// const stack = [1, 2];
// stack.push(3, 4, 'Tefsafsa', true);
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
// queue.unshift("A", "q", '42142');
// console.log(queue); // ["A", "B", "C"]


// const numbers = [1, 2, 3, 4, 5];
// const slicedArray = numbers.slice(1, 4); // [3, 4, 5]
// console.log(slicedArray);

// const colors = ["червоний", "зелений", "синій"];
// colors.splice(1, 0, "жовтий", "оранжевий");


// console.log(colors); // ["червоний", "жовтий", "оранжевий", "зелений", "синій"]

// const numbers = [1, 2, 3, 4, 5];
// numbers.splice(numbers.length, 0, 'new', 'new2'); // Видаляємо 2 елементи починаючи з індекса 2
// console.log(numbers); // [1, 2, 5]

// const animals = ["кіт", "собака", "зебра", "слон"];
// animals.splice(1, 2, "тигр", "лев");
// console.log(animals); // ["кіт", "тигр", "лев", "слон"]

// const array1 = [1, 2];
// const array2 = [3, 4];
// const concatenatedArray = array1.concat(array2);
// console.log(concatenatedArray); // [1, 2, 3, 4]


// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, i) => {
//     console.log(number * 2);
//     console.log('index:'+i);
// });

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((number) => number >= 3);

// console.log(evenNumbers);

// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumber = numbers.find((number) => number === 3);

// console.log(firstEvenNumber);

// const numbers = [1, 3, 3, 1, 5];
// const firstEvenNumberIndex = numbers.findIndex((number) => number % 2 === 0);

// console.log(firstEvenNumberIndex);


// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number) => number * 2);
// console.log(doubledNumbers);

// const strings = ['new-york', 'milan', 'odesa', 'kharkiv'];
// const stringsToUpper = strings.map((string) => string.toUpperCase());
// console.log(stringsToUpper);

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flatArray = nestedArray.flat(); // [1, 2, 3, 4, 5, 6]
// console.log(flatArray);


// const numbers = [1, 2, 3];
// const doubledAndFlattened = numbers.flatMap((number) => [number * 2, number * 3]); // [2, 3, 4, 6, 6, 9]

// console.log(doubledAndFlattened);

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months); //  ["Dec", "Feb", "Jan", "March"]

// let numArray = [140000, 104, 99];
// numArray.sort();
// console.log(numArray);

// let numArray = [140000, 104, 99];
// numArray.sort(function (a, b) {
//     return a + b;
// });

// console.log(numArray);

// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse(); // [5, 4, 3, 2, 1]

// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 10); // 15
// console.log(sum);
// const numbers = [1, 3, 3, 3, 5];
// const hasEvenNumber = numbers.some((number) => number > 5); // true

// console.log(hasEvenNumber);

// const numbers = [2, 4, 6, 8, 10];
// const allEvenNumbers = numbers.every((number) => number % 2 === 0); // false

// console.log(allEvenNumbers);


// const numbers = [1, 2, 3, 4, 5, 6];

// for (const number of numbers) {
//     console.log(number);
//     if (number >= 4) {
//         return ;
//     }

// }

// numbers.forEach((number, i) => {
//     console.log(number);
//     if (number >= 4) {
//         return 0;
//     }
// });



// let str = 'This is a string fas fsa afs ';
// let wordsCount = 0;

// let wordsArray = str.split(' ');
// console.log(wordsArray.length);

// let n = 20;
// let numbersArray = [];

// for (let i = 0; i <= n; i++) {
//     numbersArray.push(i);
// }

// let str = numbersArray.join(',');
// console.log(str);


// let words = ['apple', 'banana', 'orange', 'cherry', 'pie'];
// let minLength = 5;
// let maxLength = 6;

// let filteredArray = words.filter(word => word.length > minLength);
// let filteredArray2 = words.filter(word => word.length < maxLength);
// console.log(filteredArray);
// console.log(filteredArray2);


// let numbers = [1, 2, 3, 4, 5, 6];

// let numbers2 = numbers.map(number => number * number);

// console.log(numbers2);


// let numbers = [-2, -2, -13, 4, -5, 6];

// let firstPositive = numbers.find(number => number > 0);

// console.log(firstPositive);

const matrix = [[1, 2, 3, 'fasfas'], [4, 5, 6], [7, 8, 9]];

// console.log(matrix[0][0]); // 1
// console.log(matrix[1][2]); // 6
// console.log(matrix[2][1]); // 8

// matrix[0][2] = true;

// console.log(matrix);

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);

//     }
//     console.log('-------');

// }

// matrix.push([10, 11, 12, 14, 15, 16]);
// console.log(matrix);