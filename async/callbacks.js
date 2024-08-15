// function getData() {
//     console.log('Request to DB was sent');
//     setTimeout(function () {
//         return 'Data from server';
//     }, 2500)

// }

// const data = getData();

// console.log('This is data: ' + data);

// function getData(callback) {
//     console.log('Request to DB was sent');

//     setTimeout(function () {
//         const data = 'Data from server'
//         callback(data);
//     }, 5500)

// }

// function printData(data) {
//     console.log('From callback: ' + data);
// }

// getData(printData);

function step1(callback) {
	setTimeout(function () {
		console.log('Step 1 completed');
		callback();
	}, 3000);
}

function step2(callback) {
	setTimeout(function () {
		console.log('Step 2 completed');
		callback();
	}, 3000);
}

function step3(callback) {
	setTimeout(function () {
		console.log('Step 3 completed');
		callback();
	}, 3000);
}

step1(function () {
	step2(function () {
		step3(function () {
			console.log('All steps completed');
		});
	});
});
