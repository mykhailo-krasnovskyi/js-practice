import { Shape } from "./Shape.js";

export class Circle extends Shape {

    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    helloCircle() {
        console.log('Hello, I am Circle');
    }
}