// console.log('Start...');
// let result1 = 10 + 10;
// console.log(`Operation 1: ${result1}`);
// let result2 = 10 * 10;
// console.log(`Operation 2: ${result2}`);
// console.log('3....');
// console.log('4....');
// console.log('5....');
// console.log('6....');
// console.log('End...');

// console.log('Start program');
// setTimeout(function () {
//     console.log('Async operation is started...');
//     console.log('Async operation is done');
// }, 6000);
// console.log('Finish program');


// function getDataFromDB() {
//     console.log('Request to DB sent');
//     setTimeout(function () {
//         return 'Data from server';
//     }, 2000);
// }

// const data = getDataFromDB();
// console.log(`Data: ${data}`);



// function getDataFromDB(callback) {
//     console.log('Request to DB sent');
//     setTimeout(function () {
//         const data = 'Data from server';
//         callback(data);
//     }, 2000);
// }

// function printData(data) {
//     console.log(`Data: ${data}`);
// }

// getDataFromDB(printData);

// const newPromise = new Promise((resolve) => {
//     setTimeout(function () {
//         resolve('Data from server');
//     }, 3000);
// });

// newPromise
//     .then(data => {
//         console.log(`Start data: ${data}`);
//         console.log(`DataToUpperCase: ${data.toUpperCase()}`);
//         return data.toUpperCase();
//     })
//     .then(dataUpperCase => dataUpperCase.split(' '))
//     .then(dataSplitted => console.log(dataSplitted));


// const getRandomNumber = new Promise((reject, resolve) => {
//     setTimeout(() => {
//         const randomNumber = Math.random();
//         if (randomNumber > 0.5) {
//             resolve(randomNumber);
//         } else {
//             reject('Error. Number is greater than 0.5');
//         }
//     }, 1500);
// })

// getRandomNumber
//     .then((number) => console.log(number))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('Finally!'));


// function fetchUser(callback) {
//     setTimeout(() => {
//         console.log('1) User fetched');
//         callback({ id: 1, name: 'Alex' });
//     }, 500);
// }

// function fetchUserSettings(user, callback) {
//     setTimeout(() => {
//         console.log('2) Settings fetched for', user.name);
//         callback({ theme: 'dark', notifications: true });
//     }, 500);
// }

// function validateSettings(settings, callback) {
//     setTimeout(() => {
//         console.log('3) Settings validated');
//         callback(true);
//     }, 500);
// }

// function saveUserData(isValid, callback) {
//     setTimeout(() => {
//         if (!isValid) {
//             console.log('4) Validation failed');
//             return;
//         }
//         console.log('4) User data saved');
//         callback();
//     }, 500);
// }

// function notifyUser(callback) {
//     setTimeout(() => {
//         console.log('5) User notified');
//         callback();
//     }, 500);
// }

// fetchUser((user) => {
//     fetchUserSettings(user, (settings) => {
//         validateSettings(settings, (isValid) => {
//             saveUserData(isValid, () => {
//                 notifyUser(() => {
//                     console.log('Done');
//                 });
//             });
//         });
//     });
// });

// function fetchUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('1) User fetched');
//             resolve({ id: 1, name: 'Alex' });
//         }, 500);
//     });
// }

// function fetchUserSettings(user) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('2) Settings fetched for', user.name);
//             resolve({ theme: 'dark', notifications: true });
//         }, 500);
//     });
// }

// function validateSettings(settings) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('3) Settings validated');
//             resolve(true);
//         }, 500);
//     });
// }

// function saveUserData(isValid) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!isValid) {
//                 reject('Validation failed');
//                 return;
//             }
//             console.log('4) User data saved');
//             resolve();
//         }, 500);
//     });
// }

// function notifyUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('5) User notified');
//             resolve();
//         }, 500);
//     });
// }

// fetchUser()
//     .then(user => fetchUserSettings(user))
//     .then(settings => validateSettings(settings))
//     .then(isValid => saveUserData(isValid))
//     .then(() => notifyUser())
//     .then(() => console.log('Done'))
//     .catch(error => console.error('Error:', error));

// const successPromise = Promise.resolve('Hi!');

// successPromise.then((text) => console.log(text));


// const promiseA = Promise.resolve('Hello');
// const promiseB = Promise.reject('Promise all rejected');
// const promiseC = Promise.resolve('allSettled');
// const promisesCollection = Promise.allSettled([promiseA, promiseB, promiseC]);

// promisesCollection.then(console.log);

// const getDelay = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

// const promiseA = new Promise(resolve => setTimeout(resolve, getDelay(100, 500), 'First'));
// const promiseB = new Promise((resolve, reject) => setTimeout(reject, getDelay(100, 500), 'Second'));
// const promiseC = new Promise(resolve => setTimeout(resolve, getDelay(100, 500), 'Third'));

// Promise.race([promiseA, promiseB, promiseC])
//     .then(x => console.log('Fulfilled: ', x))
//     .catch(x => console.log('Rejected: ', x));

// const getDelay = (from, to) => Math.floor(Math.random() * (to - from + 1)) + from;

// const promiseA = new Promise(resolve => setTimeout(resolve, getDelay(100, 500), 'First'));
// const promiseB = new Promise((resolve, reject) => setTimeout(reject, getDelay(100, 500), 'Second'));
// const promiseC = new Promise((resolve, reject) => setTimeout(reject, getDelay(100, 500), 'Third'));

// Promise.any([promiseA, promiseB, promiseC])
//     .then(x => console.log('Fulfilled: ', x))
//     .catch(x => console.log('Rejected: ', x));

// function fetchPostById(postId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
// }

// fetchPostById(4)
//     .then(response => response.json())
//     .then(body => {
//         console.log('Post information:');
//         console.log(`id: ${body.id}`);
//         console.log(`title: ${body.title}`);
//         console.log(`body: ${body.body}`);
//     });

// async function fetchPostById(postId) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const body = await response.json();
//     console.log('Post information:');
//     console.log(`id: ${body.id}`);
//     console.log(`title: ${body.title}`);
//     console.log(`body: ${body.body}`);
// }

// fetchPostById(4);


async function fetchTemperature(city) {
    const apiKey = 'bd664c238b837a54a22ee16796bbea50';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    return data;
}


const city = 'Kharkiv';
fetchTemperature(city)
    .then(data => {
        if (data !== null) {
            console.log(`Current temp in city ${city}: ${data.main.temp}°C`);
        }
    })
    .catch(((e) => {
        console.log(e)
    }));
