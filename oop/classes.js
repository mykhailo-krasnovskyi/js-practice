class Car {

    // color = "blue";
    // liters = 0;

    #number;


    constructor(color, liters, brand) {
        this.color = color;
        this.liters = liters;
        this.brand = brand;
    }

    turnOn() {
        console.log(`${this.color} ${this.brand} is turned on`);
    }

    turnOff() {
        console.log(`${this.color} ${this.brand} is turned off`);

    }

    fillPetrol(litersAdded) {
        this.liters += litersAdded;
        console.log(`Filled ${litersAdded}. Now car has ${this.liters} liters of petrol`);
    }

    printNumber() {
        console.log(this.#number);
    }

    printFullNumber() {
        console.log(`ADadsda`);
        this.printNumber();
    }

    set number(carNumber) {

        if (carNumber.length < 5) {
            console.log('Wrong number');
        } else {
            this.#number = carNumber;
        }
    }

    get number() {
        return `The number is ${this.#number}`;
    }
}

// const bmw = new Car();

// bmw.turnOn();
// bmw.turnOff();
// bmw.fillPetrol(100);
// console.log(bmw.liters);
// bmw.fillPetrol(50);
// console.log(bmw.liters);

// const car1 = new Car('red', 50, 'BMW');
// const car2 = new Car('blue', 0, 'Subaru');

// car1.turnOn();
// car1.fillPetrol(500);
// car1.turnOff();

// car2.turnOn();
// car2.fillPetrol(300);
// car2.turnOff();

const car3 = new Car('red', 0, 'Opel');

//car3.number = '333';
car3.number = 'AA123456';
//console.log(car3.number);


// class Circle {
//     static PI = 3.14;
// }

// class Calculator {
//     static add(num1, num2) {
//         return num1 + num2;
//     }

//     static subtract(num1, num2) {
//         return num1 - num2;
//     }
// }

// console.log(Circle.PI)

// console.log(Calculator.add(4, 10));




class Shape {

    constructor(color) {
        this.color = color;
    }

    area() {
        throw new Error('Method area should be implemented');

    }

}


class Circle extends Shape {

    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

}

class Rectangle extends Shape {
    constructor(color, width = 20, height = 20) {
        // if (width < 0 || height < 0) {
        //     throw new Error('Data is not correct');

        // }
        super(color);

        this.width = width;
        this.height = height;

    }

    area() {
        return this.width * this.height;
    }

}

class New {

}

// const newObject = new New();
// newObject.name = 'NAME';
// console.log(newObject.name)

// const circle1 = new Circle('black', 20);
// console.log(circle1.color);
// console.log(circle1.radius);

// console.log(circle1.area());


// const rectangle1 = new Rectangle('red');
// console.log(rectangle1.width);
// console.log(rectangle1.area());


// class Animal {
//     makeSound() {
//       console.log("Some generic sound");
//     }
//   }

//   class Dog extends Animal {
//     makeSound() {
//       console.log("Woof woof!");
//     }
//   }

//   class Cat extends Animal {
//     makeSound() {
//       console.log("Meow!");
//     }
//   }

//   function animalSound(animal) {
//     animal.makeSound();
//   }

//   const dog = new Dog();
//   const cat = new Cat();

//   dog.makeSound();
//   cat.makeSound();

//   animalSound(dog); // Woof woof!
//   animalSound(cat); // Meow!


const user = {
    login() {
        return true;
    }
}

const person = {
    name: 'John',
    age: 42,
    __proto__: user
};

console.log(Object.getOwnPropertyNames(person)); // ['name', 'age']