// class Car {

//     constructor(newBrand, newColor, newMaxSpeed, vinNumber) {
//         this.brand = newBrand;
//         this.color = newColor;
//         this.maxSpeed = newMaxSpeed;
//         this.petrol = 0;
//         this._vinNumber = vinNumber;
//     }

//     turnOn() {
//         console.log(`${this.color} ${this.brand} is turned on.`);
//     }

//     turnOff() {
//         console.log(`${this.color} ${this.brand} is turned off.`);
//     }

//     fillPetrol(liters) {
//         this.petrol += liters;
//         console.log(`Filled. Now ${this.color} ${this.brand} has ${this.petrol} liters of petrol.`)

//     }

//     set vinNumber(newValue) {
//         console.log(`Setter! New vinNumber is ${newValue}`);
//         this._vinNumber = newValue;
//     }

//     get vinNumber() {
//         console.log('Getter!');
//         return this._vinNumber;
//     }
// }

// const audi = new Car('Audi', 'red', 200, '123455678');
// const bmw = new Car('BMW', 'black', 220, '987654321');

// audi.turnOn();
// audi.turnOff();

// bmw.turnOn();
// bmw.turnOff();

// audi.fillPetrol(40);
// audi.fillPetrol(20);

// console.log(audi.vinNumber);
// audi.vinNumber = 100
// console.log(audi.vinNumber);

// class Calculator {
//     static PI = 3.14;

//     static add(num1, num2) {
//         return num1 + num2;
//     }
// }

// console.log(Calculator.PI);
// console.log(Calculator.add(10, 20));

class Shape {
    constructor(color) {
        this.color = color;
    }

    getColor() {
        console.log(`Hello from Shape! Your color is ${this.color}`);
    }

    getArea() {
        console.log('Error! Implement this method for you class.');
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    sayHello() {
        console.log('Hello, I am Circle!');
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    sayHello() {
        console.log('Hello, I am Rectangle!');
    }

    getArea() {
        return this.width * this.height;
    }
}

