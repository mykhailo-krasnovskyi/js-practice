// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i === 3) {
//         break;
//     }
// }


// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }


// for (let a = 0, b = 5; a < 10 && b < 10; a++, b++) {
//     console.log(`A: ${a}, B: ${b}`);
// }


// for (let i = 1; i <= 10; i = i += 3) {
//     console.log(i);
// }

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// let i = 122;
// do {
//     console.log(i);
//     i++;
// } while (i < 10);

// const number = 22;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number}x${i} = ${number * i}`);
// }

// let i = 1;
// while (i <= 10) {
//     console.log(`${number}x${i} = ${number * i}`);
//     i++;
// }

// let userInput = 'Hello from Hillel';
// let vowelCount = 0;

// 1. Пройтись по всіх літерах
// 2. Знайти голосні (e, i, o, u, a) + вивести
// 3. Порахувати кількість голосних

// for (let i = 0; i < userInput.length; i++) {
//     let currentChar = userInput[i];

//     if (currentChar === 'e' || currentChar === 'a' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') {
//         console.log(`Vowel is found! It's - '${currentChar}'`);
//         vowelCount++;
//     }
// }
// console.log(`Final number of vowels: ${vowelCount}`);

// for (let i = 0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(`${i}x${j}= ${i * j}`);
//     }
//     console.log('-------------------------');
// }