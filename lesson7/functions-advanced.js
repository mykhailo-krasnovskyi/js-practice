// const sayHi = () => {
//     console.log('Hi!');
// }

// const sayBye = () => {
//     console.log('Bye!');
// }

// const hof = (messageCb) => {
//     console.log('Inside HOF');
//     messageCb();
// }

// hof(sayHi);

// hof(sayBye);

// function processPayment(paymentId, onFailureCb, onSuccessCb) {

//     let isPaymentSuccess = false;

//     if (paymentId % 2 === 0) {
//         isPaymentSuccess = true;
//     } else {
//         isPaymentSuccess = false;
//     }

//     if (isPaymentSuccess) {
//         onSuccessCb(paymentId);
//     } else {
//         onFailureCb(paymentId);
//     }

// }

// function onPaymentSuccess(paymentId) {
//     console.log(`Your payment with ID ${paymentId} is successful! `);
// }

// function onPaymentFailure(paymentId) {
//     console.log(`Your payment with ID ${paymentId} is failed! `);
// }

// processPayment(525256, onPaymentFailure, onPaymentSuccess);


// (function () {
//     // Оголошення та використання анонімної функції

//     console.log('Hello from IIFE!');
// })();


// function counter() {
//     let count = 0;

//     count++;
//     console.log(count);
// }

// counter();
// counter();
// counter();

// function counter() {
//     let count = 0;

//     return function () {
//         return count++;
//     }
// }

// let counter1 = counter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// let counter2 = counter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// function countToTen(startValue) {
//     for (let i = startValue; i <= 10; i++) {
//         console.log(i);
//     }
// }

// countToTen(6);

// function countToTenRecursion(startValue) {
//     if (startValue <= 10) {
//         console.log(startValue);
//         const finishValue = startValue + 1;
//         countToTenRecursion(finishValue);
//     }
// }

// countToTenRecursion(4);

// function traverse(node) {
//     console.log(node.value);
//     node.children.forEach(child => {
//         traverse(child); // Рекурсивний виклик для кожного дочірнього вузла
//     });
// }


// const tree = {
//     value: 1,
//     children: [
//         {
//             value: 2,
//             children: []
//         },
//         {
//             value: 3,
//             children: [
//                 {
//                     value: 4,
//                     children: []
//                 },
//                 {
//                     value: 5,
//                     children: []
//                 }
//             ]
//         }
//     ]
// };

// traverse(tree);

// const array = [1, 2, 3];

// const iterator = array[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// function* myGenerator() {
//     yield 1
//     yield 2
//     yield 3
//     yield 4
//     yield 5
// }

// const generator = myGenerator()

// console.log(generator.next()) // { value: 1, done: false }
// console.log(generator.next()) // { value: 2, done: false }
// console.log(generator.next()) // { value: 3, done: false }
// console.log(generator.next()) // { value: undefined, done: true }
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// function outerFunction() {
//     console.log('Hello from outerFunction!');

//     function innerFunction() {
//         console.log('Hello from innerFunction!');
//     }

//     innerFunction();
// }

// outerFunction();
