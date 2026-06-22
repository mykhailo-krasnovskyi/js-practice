const axios = require('axios');

describe('Get books', () => {
    test('Get all books', async () => {
        const response = await axios.get('https://demoqa.com/BookStore/v1/Books');
        expect(response.status).toBe(200);
        expect(response.data.books).toHaveLength(8);
    })

    test('Get "Git Pocket Guide" book', async () => {
        const response = await axios.get('https://demoqa.com/BookStore/v1/Book?ISBN=9781449325862');
        const bookData = response.data;
        expect(response.status).toBe(200);
        expect(bookData.isbn).toBe('9781449325862');
        expect(bookData.title).toBe('Git Pocket Guide');
        expect(bookData.subTitle).toBe('A Working Introduction');
        expect(bookData.description.length).toBeGreaterThan(100);
    })

    test('Get a book with invalid ISBN', async () => {
        const response = await axios.get('https://demoqa.com/BookStore/v1/Book?ISBN=41421421d', {
            validateStatus: () => true
        });

        const message = response.data.message;
        expect(response.status).toBe(400);
        expect(message).toBe('ISBN supplied is not available in Books Collection!');
    })
})

describe('Add books', () => {
    test.only('Add one book', async () => {

        const responseAuth = await axios.post('https://demoqa.com/Account/v1/Login',
            {
                "userName": "michael-testuser",
                "password": "52hPed%s"
            });

        const responseBook = await axios.post('https://demoqa.com/BookStore/v1/Books', {
            "userId": responseAuth.data.userId,
            "collectionOfIsbns": [
                {
                    "isbn": "9781593277574"
                }
            ]
        }, {
            headers: {
                'Authorization': `Bearer ${responseAuth.data.token}`
            }
        });
        console.log(responseBook.data);
        expect(responseBook.status).toBe(201);
        expect(responseBook.data.books[0].isbn).toBe('9781593277574');
    })

})