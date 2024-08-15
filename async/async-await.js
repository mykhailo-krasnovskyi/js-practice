// async function fetchPostById(postId) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const data = await response.json();
//     return data;
// }

// async function printData(postId) {
//     const postData = await fetchPostById(postId);
//     const postUser = postData.userId;
//     const postTitle = postData.title;
//     const postBody = postData.body;

//     console.log(`Posts's ${postId} data:`);
//     console.log('-------------')
//     console.log(`User: ${postUser}`);
//     console.log(`Title: ${postTitle}`);
//     console.log(`Body: ${postBody}`);

// }

// printData(5);

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
	.then((data) => {
		if (data !== null) {
			console.log(`Current temp in city ${city}: ${data.main.temp}°C`);
		}
	})
	.catch((e) => {
		console.log(e);
	});
