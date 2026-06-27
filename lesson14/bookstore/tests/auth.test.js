const axios = require('axios');
const AccountController = require('../controllers/AccountController');
const users = require('../test-data/users.json');
const { faker } = require('@faker-js/faker');

test('Generate token', async () => {
    const response = await AccountController.login(users.user1.userName, users.user1.password);
    expect(response.status).toBe(200);
    expect(response.data.token).not.toBeNull();
})

test.only('Register new account', async () => {
    const response = await AccountController.register(`gasggatest${Date.now()}`, 'UUpassword412412!')
    console.log(faker.internet.username());
})