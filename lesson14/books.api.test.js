const BooksController = require('./controllers/BooksController');
const UserController = require('./controllers/UserController');
const user = {
    userId: '07a44798-a8ae-4eeb-9581-79c87b467a4f',
    password: '52hPed%s',
    userName: 'michael-testuser'
}

let authToken;

describe('Public requests', () => {

    test('Get all books', async () => {
        const response = await BooksController.getAllBooks();
        expect(response.status).toBe(200);
        expect(response.data.books.length).toBe(8);
        expect(response.data.books[0].title).toBe('Git Pocket Guide');
    })

    test('Verify first book details', async () => {
        const response = await BooksController.getBook('9781449325862');
        expect(response.status).toBe(200);
        const book = response.data;
        expect(book.isbn).toBe('9781449325862');
        expect(book.title).toBe('Git Pocket Guide');
        expect(book.author).toBe('Richard E. Silverman');
    })
})

describe('Private requests', () => {
    beforeAll(async () => {
        const authResponse = await UserController.login(user.userName, user.password);
        authToken = authResponse.data.token;
    })

    afterAll(async () => {
        const deleteAllUserBooks = await BooksController.deleteAllBooks(authToken, user.userId);

        expect(deleteAllUserBooks.status).toBe(204);
    })

    test('Add "Speaking JavaScript" book to Collection', async () => {
        const responseAddingBook = await BooksController.addBook(authToken, user.userId, '9781449365035');

        expect(responseAddingBook.status).toBe(201);
        expect(responseAddingBook.data.books[0].isbn).toBe('9781449365035');
    })

    test('Add "Programming JavaScript Applications" book to Collection', async () => {
        const responseAddingBook = await BooksController.addBook(authToken, user.userId, '9781491950296');

        expect(responseAddingBook.status).toBe(201);
        expect(responseAddingBook.data.books[0].isbn).toBe('9781491950296');
    })
})