function fetchPostById(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
};


console.log('1');
console.log('2');

fetchPostById(4).then(response => response.json()
    .then(data => console.log(data)).then(console.log(3))
)
.then()
.then()
.then();

console.log('4');
console.log('4');

