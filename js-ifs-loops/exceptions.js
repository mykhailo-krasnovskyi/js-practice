// let result = 10 / 0;
console.log('Before error');

// try {
//     functionCall();
// } catch (error) {
//     console.error("Сталася помилка:", error.message);
// }

function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Ділення на нуль недопустиме!");
    }
    return a / b;
}
try {
    const result = divideNumbers(10, 4);
    console.log(result);  // Цей рядок не буде виконано через throw вище
} catch (error) {
    console.error("Сталася помилка:", error.message);
} finally {
    console.log("Це повідомлення виводитиметься завжди")
}

console.log('After error');


