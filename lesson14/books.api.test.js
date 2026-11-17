const axios = require('axios');

test('Get all books', async () => {
    const response = await axios.get('https://demoqa.com/BookStore/v1/Books');
    expect(response.status).toBe(200);
    expect(response.data.books.length).toBe(8);
    expect(response.data.books[0].title).toBe('Git Pocket Guide');
})

test('Verify first book details', async () => {
    const response = await axios.get('https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862');
    expect(response.status).toBe(200);
    const book = response.data;
    expect(book.isbn).toBe('9781449325862');
    expect(book.title).toBe('Git Pocket Guide');
    expect(book.author).toBe('Richard E. Silverman');
})