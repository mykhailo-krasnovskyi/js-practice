const axios = require('axios');

test('Generate token', async () => {
    const response = await axios.post('https://demoqa.com/Account/v1/Login',
        {
            "userName": "michael-testuser",
            "password": "52hPed%s"
        });
    expect(response.status).toBe(200);
    expect(response.data.token).not.toBeNull();
})
