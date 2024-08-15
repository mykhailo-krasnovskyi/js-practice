// let x = 2;

// if (x <= 5) {
//     console.log('X is bigger than 5');
//     if (x === 10) {
//         console.log('X is 10');
//     }
// }

// if (x < 5) {
//     console.log('X is less than 5');
// }

// if (x < 5) console.log("One lane");

// let time = 5;
// let greeting;

// if (time < 10) {
//     greeting = 'Good morning';
// } else if (time < 18) {
//     greeting = 'Good day';
// } else if (time < 24) {
//     greeting = 'Good night';
// } else {
//     greeting = 'Your input is not correct.'
// }

// console.log(greeting)

// !x
// !!
// &&
// ||

// let string = '43434'; //false
// if (!!string) {
//     console.log('The string is empty')
// }

// const numberA = -1;
// const numberB = 4;

// if (numberA >= 0 && numberB >= 0) {
//     console.log('Numbers are positive');
// } else {
//     console.log('At least one number is not positive');
// }

/*
child - >=3 &&<=13
teenager - >=14 && <=18
adult - >=19&&60
*/

// let age = 15;

// let stage;

// if (age >= 0 && age <= 13) {
//     stage = 'a child'
// } else if (age >= 14 && age <= 18) {
//     stage = 'a teenager'
// } else {
//     stage = 'an adult'
// }

// console.log(stage);

// const numberA = -4;
// const numberB = -44;

// if (numberA >= 0 && numberB >= 0) {
//     console.log('Numbers are positive');
// } else if (numberA >= 0 || numberB >= 0) {
//     console.log('At least one number is positive');
// } else {
//     console.log('Both numbers are negative');
// }

// const age = 6;
// let accessAllowed;

// if (age > 18) {
//     accessAllowed = 'allow';
// } else {
//     accessAllowed = 'don\'t allow';
// }

// const accessAllowed = age > 18 ? 'allow' : 'don\'t allow';

// console.log(accessAllowed);

// let studentAge = 24;
// let hadDriverApprove = true;
// if (studentAge >= 18 && hadDriverApprove) {
//     console.log('You can practice');
// } else {
//     console.log('You can not practice');
// }

let studentAge = 24;
let hadDriverApprove = true;
let message = studentAge >= 18 && hadDriverApprove ? 'You can practice' : 'You can not practice';
console.log(message);
