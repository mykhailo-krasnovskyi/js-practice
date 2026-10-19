// function hof(callback, message) {
//     console.log('Hello from HOF 1');
//     callback(message);
//     console.log('Hello from HOF 2');
// }

// const sayHi = () => {
//     console.log('Hi!');
// }

// const sayBye = () => {
//     console.log('Bye!');
// }

// const saySomething = (message) => {
//     console.log(message);
// }


// hof(sayHi);
// hof(sayBye);

// hof(saySomething, 'Text string');

// function processPayment(onSuccessCb, onFailureCb, paymentId) {
//     const isPaymentSuccess = false;

//     if (isPaymentSuccess) {
//         console.log('Success!');
//         onSuccessCb(paymentId);
//     } else {
//         console.log('Failure');
//         onFailureCb(paymentId);
//     }
// }

// function onPaymentSuccess(paymentId) {
//     console.log(`Payment ${paymentId} is successful`);
// }

// function onPaymentFailure(paymentId) {
//     console.log(`Payment ${paymentId} is failed`);

// }

// processPayment(onPaymentSuccess, onPaymentFailure, '412412414');

// function counter() {
//     let start = 1;

//     return function () {
//         return start++;
//     }
// }

// let counter1 = counter();
// let counter2 = counter();
// let counter3 = counter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// console.log(counter2());

// console.log(counter3());
// console.log(counter3());
// console.log(counter3());

// console.log(counter1());

// function multiplier(factor) {
//     console.log('Hiiii');
//     return function (number) {
//         return number * factor;
//     }
// }

// const double = multiplier(2);
// const triple = multiplier(3);
// const quadruple = multiplier(4);

// console.log('-------------------');
// console.log(double(10));
// console.log(double(5));
// console.log(triple(5));
// console.log(quadruple(3));

// function countToTen(startValue) {
//     for (let i = startValue; i <= 10; i++) {
//         console.log(i);
//     }
// }

// countToTen(5);
// console.log('--------------');
// countToTen(-10);

// function countToTenRecursion(startValue) {
//     if (startValue <= 10) {
//         console.log(startValue);
//         countToTenRecursion(startValue + 1);
//     }
// }

// countToTenRecursion(3);


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

// (function () {
//     const message = "Це локальна змінна";
//     console.log(message);
// })();

// function outerFunction() {
//     const outerVariable = 'I am from outer function';

//     function innerFunction() {
//         console.log(outerVariable);
//     }
//     innerFunction();
// }

// outerFunction();

// const array = [10, 20, 30];
// const iterator = array[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// function* myGenerator() {
//     yield 1
//     yield 2
//     yield 3
// }

// const generator = myGenerator()

// console.log(generator.next()) // { value: 1, done: false }
// console.log(generator.next()) // { value: 2, done: false }
// console.log(generator.next()) // { value: 3, done: false }
// console.log(generator.next()) // { value: undefined, done: true }