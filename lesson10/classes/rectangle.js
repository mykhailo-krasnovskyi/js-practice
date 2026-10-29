import { Shape } from "./shape.js";

export class Rectangle extends Shape {
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
