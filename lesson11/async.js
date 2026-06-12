// console.log('Start Program');
// setTimeout(function () {
//     console.log('Async operation is done');
// }, 4000);
// console.log('Finish Program');


// function getData() {
//     console.log('Request to DB sent...');
//     setTimeout(function () {
//         return 'Data from server';
//     }, 4000);
// }

// const data = getData();
// console.log(`Data: ${data}`);

// function getData(callback) {
//     console.log('Request to DB sent...');
//     setTimeout(function () {
//         const data = 'Data from server';
//         callback(data);
//     }, 4000);
// }

// function printData(data) {
//     console.log(`Data: ${data}`);
// }

// getData(printData);


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


// const newPromise = new Promise((resolve) => {
//     setTimeout(function () {
//         resolve('10');
//     }, 4000);
// });

// newPromise.then(function (data) {
//     console.log(`Data: ${data}`);
// })

// newPromise
//     .then(data => Number.parseInt(data))
//     .then(number => number * 10)
//     .then(number => console.log(number));

// const getRandomNumber = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const randomNumber = Math.random();

//         if (randomNumber > 0.5) {
//             resolve(randomNumber);
//         } else {
//             reject(new Error('Wrong randomNumber'));
//         }
//     }, 2000)
// });

// getRandomNumber
//     .then(result => {
//         console.log(`Operation is successful, result: ${result}`);
//     }).catch((error) => {
//         console.log(`Operation is failed, error: ${error.message}`)
//     }).finally(() => {
//         console.log('Finally');
//     });


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


// const a = Promise.resolve('Hello');
// const b = Promise.reject('Promise all rejected');
// const c = Promise.resolve('All');
// const promisesCollection = Promise.all([a, b, c]);

// promisesCollection
//     .then(x => x.toString().replaceAll(',', ' '))
//     .then(console.log)
//     .catch(console.log);



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

// const promiseA = new Promise(resolve => setTimeout(resolve, getDelay(5000, 10000), 'First'));
// const promiseB = new Promise((resolve, reject) => setTimeout(reject, getDelay(100, 500), 'Second'));
// const promiseC = new Promise((resolve, reject) => setTimeout(reject, getDelay(100, 500), 'Third'));

// Promise.any([promiseA, promiseB, promiseC])
//     .then(x => console.log('Fulfilled: ', x))
//     .catch(x => console.log('Rejected: ', x));

// function fetchPostById(postId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
// }

// fetchPostById(10)
//     .then(response => response.json())
//     .then(json => {
//         console.log('Post info:');
//         console.log(`User ID: ${json.userId}`);
//         console.log(`Post ID: ${json.id}`);
//         console.log(`Title: ${json.title}`);
//         console.log(`Body: ${json.body}`);
//     })
//     .catch((error) => {
//         console.log(`Error happened`);
//     })


// async function fetchPostById(postId) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const data = await response.json();
//     return data;
// }

// async function printPostDataById(postId) {
//     const postData = await fetchPostById(postId);
//     console.log(`Post title ${postData.title}`);
// }

// printPostDataById(10);


// async function fetchTemperature(city) {
//     const apiKey = 'bd664c238b837a54a22ee16796bbea50';
//     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


//     const response = await fetch(apiUrl);
//     const data = await response.json();
//     console.log(data);
//     return data;
// }


// const city = 'Kharkiv';
// fetchTemperature(city)
//     .then(data => {
//         if (data !== null) {
//             console.log(`Current temp in city ${city}: ${data.main.temp}°C`);
//         }
//     })
//     .catch(((e) => {
//         console.log(e)
//     }));



function fetchUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('1) User fetched');
            resolve({ id: 1, name: 'Alex' });
        }, 500);
    });
}

function fetchUserSettings(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('2) Settings fetched for', user.name);
            resolve({ theme: 'dark', notifications: true });
        }, 500);
    });
}

function validateSettings(settings) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('3) Settings validated');
            resolve(true);
        }, 500);
    });
}

function saveUserData(isValid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isValid) {
                reject(new Error('Validation failed'));
                return;
            }
            console.log('4) User data saved');
            resolve();
        }, 500);
    });
}

function notifyUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('5) User notified');
            resolve();
        }, 500);
    });
}

async function processUser() {
    try {
        const user = await fetchUser();
        const settings = await fetchUserSettings(user);
        const isValid = await validateSettings(settings);
        await saveUserData(isValid);
        await notifyUser();

        console.log('Done');
    } catch (error) {
        console.error('Error:', error.message);
    }
}

processUser();