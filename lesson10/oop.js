// class Car {

//     #number;

//     constructor(newBrand, newModel, newLitersInside, newNumber) {
//         this.brand = newBrand;
//         this.model = newModel;
//         this._litersInside = newLitersInside;
//         this.#number = newNumber;
//     }

//     turnOn() {
//         console.log(`${this.brand} ${this.model} is turned on`);
//     }

//     turnOff() {
//         console.log(`${this.brand} ${this.model} is turned off`);
//     }

//     fillPetrol(liters) {
//         this.litersInside += liters;
//         console.log(`Now there are ${this.litersInside} liters of petrol in ${this.brand} ${this.model}`);
//     }

//     printNumber() {
//         console.log(`Car's number is ${this.#number}`);
//     }

//     get litersInside() {
//         return this._litersInside;
//     }

//     set litersInside(liters) {
//         console.log(`Liters ${liters}`);
//         if (liters <= 0) {
//             console.log('Wrong number');
//         } else {
//             this._litersInside = liters;
//         }
//     }
// }

// const bmw = new Car('BMW', 'X5', 50);
// const audi = new Car('Audi', 'A6', 10, '123456789');

// bmw.turnOn();
// bmw.fillPetrol(100);
// bmw.turnOff();
// console.log('---------------');
// audi.turnOn();
// console.log(audi._litersInside);
// audi.fillPetrol(-20);

// audi.litersInside = 20;
// console.log(audi._litersInside);
// audi.litersInside = 100;

// class Calculator {
//     static lastResult;
//     static PI = 3.1415;

//     static add(num1, num2) {
//         this.lastResult = num1 + num2;
//         return this.lastResult;
//     }

//     static multiply(num1, num2) {
//         this.lastResult = num1 * num2;
//         return this.lastResult;
//     }
// }

// console.log(Calculator.add(10, 20));
// console.log(Calculator.multiply(10, 10));
// console.log(Calculator.PI);
// console.log(Calculator.lastResult);