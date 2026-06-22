const calculator = require("./calculator");

beforeAll(() => {
    console.log('THIS IS A MAIN BEFORE ALL HOOK');
})

beforeEach(() => {
    console.log('THIS IS A MAIN BEFORE EACH HOOK');
})

afterEach(() => {
    console.log('THIS IS A MAIN AFTER EACH HOOK');
})

afterAll(() => {
    console.log('THIS IS A MAIN AFTER ALL HOOK');
})

describe('Operator +', () => {

    beforeEach(() => {
        console.log('THIS IS AN OPERATOR + BEFORE EACH');
    })
    test('Test 1: 10 + 20 = 30', () => {
        let result = calculator(10, 20, '+');
        expect(result).toBe(30);
        console.log('TEST 1');
    })

    test('Test 2: -10 + 20 = 10', () => {
        let result = calculator(-10, 20, '+');
        expect(result).toBe(10);
        console.log('TEST 2');

    })

    test('Test 3: -20 + -20 = -40', () => {
        let result = calculator(-20, -20, '+');
        expect(result).toBe(-40);
    })
})

describe('Operator -', () => {
    test('Test 4: Result: 20 - 30 = -10', () => {
        let result = calculator(20, 30, '-');
        expect(result).toBe(-10);
    })

    test('Test 5: Result: -20 - 20 = 0', () => {
        let result = calculator(-20, -20, '-');
        expect(result).toBe(0);
    })
});

describe('Operator *', () => {
    test('Test 6: Result: 2 * 10 = 20', () => {
        let result = calculator(2, 10, '*');
        expect(result).toBe(20);
    })
});


describe('Operator /', () => {
    test('Test 7: Result: 10 / 2 = 5', () => {
        let result = calculator(10, 2, '/');
        expect(result).toBe(5);
    })
});

describe('Negative tests', () => {

    describe('Wrong operator', () => {
        test('Test 8: Wrong operator .', () => {
            let result = calculator(-20, -20, '.');
            expect(result).toBe('Wrong operator');
        })
    })

    describe('Without parameters', () => {
        test('Test 9: Num1 is empty', () => {
            let result = calculator(undefined, -20, '.');
            expect(result).toBe('Num1 cannot be empty');
        })
    })

});



