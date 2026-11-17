const { sum } = require('./calculator.js');

test('Both positive: Verify 2+2=4', () => {
    console.log('Before fail');
    expect(sum(2, 2)).toEqual(4);
    console.log('After fail');
})

test('First positive: Verify 10+(-2)=8', () => {
    expect(sum(10, -2)).toEqual(8);
})

test('Second positive: Verify -10+2=-8', () => {
    expect(sum(-10, 2)).toEqual(-8);
})