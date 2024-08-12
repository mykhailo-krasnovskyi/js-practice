// const newPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         const randomNumber = Math.random();
//         console.log('Random number is:' + randomNumber);
//         if (randomNumber > 0.5) {
//             resolve(randomNumber);
//         } else {
//             reject('Error happened');
//         }

//     }, 1000)
// })

// newPromise.then(value => value += 10)
//     .then(value => value *= 3)
//     .then(value => console.log(value))
//     .catch((error) => {
//         console.log('The error is: ' + error);

//     }).finally(() => {
//         console.log('Finally!');
//     })


// newPromise.then(function (value) {
//     return value + 10;
// })
//     .then(function (value) {
//         return value * 3;
//     })
//     .then(function (value) {
//         console.log(value);
//     })


// function step1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("Step 1 completed");
//             resolve();
//         }, 1000);
//     });
// }

// function step2() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("Step 2 completed");
//             resolve();
//         }, 1000);
//     });
// }

// function step3() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("Step 3 completed");
//             resolve();
//         }, 1000);
//     });
// }

// step1()
//     .then(() => step2())
//     .then(() => step3())
//     .then(() => {
//         console.log("All steps completed");
//     })

// const a = Promise.resolve('Hello');
// // const b = Promise.reject('Promise all rejected');
// const c = Promise.resolve('All');
// const e = Promise.resolve('22222');

// const promisesCollection = Promise.all([a, c, e, newPromise]);

// promisesCollection
//     .then(x => x.toString().replaceAll(',', ' '))
//     .then(console.log)
//     .catch(console.log);