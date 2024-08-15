// let number1 = 10;
// let number2 = "10";

// console.log(typeof number1);
// console.log(typeof number2);
// console.log(typeof true);

// const number = -4.56;
// const absoluteValue = Math.abs(number); // Поверне 4.56

// // const squaredValue = Math.pow(5, 5); // Поверне 9 (3 в квадраті)

// // const roundedNumber = Math.floor(5.9); // Поверне 6 (округлене до найближчого цілого)

// // const randomNum = Math.random(); // Поверне випадкове число між 0 та 1
// console.log(Math.floor(Math.random() * 100) + 1);

// const text = "I'm a string!";
// console.log(text[0]); // Виведе: "I"
// console.log(text[3]); // Виведе: " "
// console.log(text[4]); // Виведе: "a"

// console.log(text.charAt(10))

// const str = "Hello";
// const lastIndex = str.length - 1

// // останній символ
// console.log( str[lastIndex] ); // o

// // Або передавши вираз вирахування індексу одразу в квадратні дужки

// // останній символ
// console.log( str[str.length - 1] ); // o

// // передостанній символ
// console.log( str[str.length - 2] ); // l

// let str = "Hello";

// str[0] = 'h';
// str = "hello";
// console.log( str[0] ); // не працює

// const firstName = "John";
// const lastName = "Doe";
// const fullName = `My first name is ${firstName}, my last name is ${lastName}`
// console.log(fullName); // Виведе: "John Doe"

// const text = "JavaScriptJava";

// console.log(text.length); // Виведе: 10
// console.log(text.toUpperCase()); // Виведе: "JAVASCRIPT"
// console.log(text.toLowerCase()); // Виведе: "javascript"

// console.log(text.charAt(3)); // Виведе: "a"

// console.log(text.indexOf("Script")); // Виведе: 4

// console.log(text.substring(4, 10)); // Виведе: "Script"
// console.log(text.endsWith("Script")); // Виведе: true
// console.log(text.startsWith("Java")); // Виведе: true

// console.log(text.slice(4, 7)); // Виведе: "Scr"
// console.log(text.replace("Java", "Type")); // Виведе: "TypeScript"
// console.log(text.replaceAll("Java", "Type")); // Виведе: "JAvAScript"
// console.log(text.includes("Script")); // Виведе: true

// let sum = 40 + 2;

// console.log(sum); // 42 - операція додавання
// console.log(42 - 2); // 40 - операція віднімання
// console.log(2 * 2); // 4 - операція множення
// console.log(4 / 2); // 2 - операція ділення

// console.log(7 % 2); // 1 — залишок від ділення 5 на 2
// console.log(2 % 2); // 0 — залишок від ділення 2 на 2

// let counter = 1;
// let a = ++counter;
// console.log(counter) // 2
// console.log(a); // 2

// let counter = 1;
// let a = counter++; // змінили ++counter на counter++
// console.log(counter) // 2
// console.log(a); //

// console.log(3 <= 3);  // true
// console.log(1 = 1); // true
// console.log(3 == 1); // false

// console.log('' === false); // true
// console.log(1 === 1); // true, рядок '01' стає числом 1

// Логічне значення true стає 1, а false — 0.

// console.log(true == 1); // true  1 === 1
// console.log(false == 0); // true 0 === 0

// console.log(true || true); // true
// console.log(false || true); // true
// console.log(true || false); // true
// console.log(false || false); // false

// console.log(true && true); // true
// console.log(false && true); // false
// console.log(true && false); // false
// console.log(false && false); // false

// console.log(5 < 6 || 8 < 2);

// console.log(1===2 && 5===5);

//console.log(0 || 100); // 100
// let isButtonDisplayed = undefined;

// let result = isButtonDisplayed ?? true;
// console.log(result)

// let number = 10;
// // number = number + 5;
// number += 5;
// console.log(number)
