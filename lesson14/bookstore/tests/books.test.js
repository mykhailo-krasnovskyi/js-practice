const axios = require('axios');
const BooksController = require('../controllers/BooksController');
const AccountController = require('../controllers/AccountController');
const books = require('../test-data/books.json');
const users = require('../test-data/users.json')

describe('Get books', () => {
    test('Get all books', async () => {
        const response = await BooksController.getAllBooks();
        expect(response.status).toBe(200);
        expect(response.data.books).toHaveLength(8);
    })

    test('Get "Git Pocket Guide" book', async () => {
        const response = await BooksController.getBookByIsbn(books.data[0].isbn);
        const bookData = response.data;
        expect(response.status).toBe(200);
        expect(bookData.isbn).toBe(books.data[0].isbn);
        expect(bookData.title).toBe(books.data[0].title);
        expect(bookData.subTitle).toBe(books.data[0].subTitle);
        expect(bookData.description.length).toBeGreaterThan(100);
    })

    test('Get a book with invalid ISBN', async () => {
        const response = await BooksController.getBookByIsbn('41421421d');
        const message = response.data.message;
        expect(response.status).toBe(400);
        expect(message).toBe('ISBN supplied is not available in Books Collection!');
    })
})

describe('Add books', () => {
    let token;

    beforeAll(async () => {
        const response = await AccountController.login(users.user1.userName, users.user1.password);
        token = response.data.token;
        expect(response.status).toBe(200);
        expect(response.data.token).not.toBeNull();
    })

    test('Add "Git Pocket Guide" book', async () => {
        const responseBook = await BooksController.addBook(users.user1.userId, books.data[0].isbn, token);
        console.log(responseBook.data);
        expect(responseBook.status).toBe(201);
        expect(responseBook.data.books[0].isbn).toBe(books.data[0].isbn);
    })

    test('Add "Learning JavaScript Design Patterns" book', async () => {
        const responseBook = await BooksController.addBook(users.user1.userId, books.data[1].isbn, token);
        console.log(responseBook.data);
        expect(responseBook.status).toBe(201);
        expect(responseBook.data.books[0].isbn).toBe(books.data[1].isbn);
    })

    test('Add "Designing Evolvable Web APIs with ASP.NET book', async () => {
        const responseBook = await BooksController.addBook(users.user1.userId, books.data[2].isbn, token);
        console.log(responseBook.data);
        expect(responseBook.status).toBe(201);
        expect(responseBook.data.books[0].isbn).toBe(books.data[2].isbn);
    })

    afterAll(async () => {
        const response = await BooksController.deleteAllBooks(users.user1.userId, token);
        expect(response.status).toBe(204);
    })

})