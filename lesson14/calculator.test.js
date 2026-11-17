const { sum } = require('./calculator.js');

describe('Smoke', () => {
    test('1. Both positive: Verify 2+2=4', () => {
        console.log('test1-1');
        expect(sum(2, 2)).toEqual(4);
        console.log('test1-2');
    })
})

describe('Regression', () => {
    beforeAll(() => {
        console.log('1. Hello from beforeAll');
    })

    beforeEach(() => {
        console.log('2. Hello from beforeEach');
    })

    afterEach(() => {
        console.log('3. Hello from afterEach');
    })

    afterAll(() => {
        console.log('4. Hello from afterAll');
    })

    test('2. First positive: Verify 10+(-2)=8', () => {
        expect(sum(10, -2)).toEqual(8);
    })

    test('3. Second positive: Verify -10+2=-8', () => {
        expect(sum(-10, 2)).toEqual(-8);
    })

    describe('Extra regression', () => {
        beforeEach(() => {
            console.log('5. Hello from sub-beforeEach');

        })
        test('4. First positive: Verify 10+(-2)=8', () => {
            expect(sum(10, -2)).toEqual(8);
        })

        test('5. Second positive: Verify -10+2=-8', () => {
            expect(sum(-10, 2)).toEqual(-8);
        })
    })
})
