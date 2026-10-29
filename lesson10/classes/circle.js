import { Shape } from "./shape.js";

export class Circle extends Shape {
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
