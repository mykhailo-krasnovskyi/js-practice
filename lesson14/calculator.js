function calculate(num1, num2, operator) {

    if (num1 === undefined) {
        return 'Num1 cannot be empty'
    }
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else {
        return 'Wrong operator'
    }
}

module.exports = calculate;