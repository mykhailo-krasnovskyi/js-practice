// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//     if (i === 3 || i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// for (let a = 0, b = 0, c = 10; a < 10, b < 5, c > 0; a++, b++, c--) {
//     console.log(`a:${a}, b:${b}, c:${c}`);
// }

// let i = 0;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let i = 1000;

// do {
//     console.log(i);
//     i++;
// } while (i < 5);

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		console.log(i, j);
// 	}
// }

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		console.log(i, j);
// 	}
// }

// let output = '';

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 9; j++) {
// 		console.log(' ' + i * j);

// 		if (i * j < 10) {
// 			console.log( ' ');
// 		}
// 	}

// 	console.log('')
// }

//console.log(output);

// const number = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`)
// }

// let i = 1;
// while (i <= 10) {
//     console.log(`${number} x ${i} = ${number * i}`);
//     i++;
// }

// !5 = 1*2*3*4*5 = 120

// let number = 5;
// let factorial = 1;

// for (let i = 2; i <= number; i++) {
//     factorial *= i;
// }

// console.log(factorial);

let userInput = 'test string';
let vowelCount = 0;

for (let i = 0; i < userInput.length; i++) {
	let currentChar = userInput[i];

	if (currentChar === 'a' || currentChar === 'e' || currentChar === 'o' || currentChar === 'u' || currentChar === 'i') {
		vowelCount++;
		console.log(`We found a vowel! It's ${currentChar} on index ${i}`);
	}
}

console.log('The number of vowels is ' + vowelCount);
