import { Shape } from "./shape.js";

export class Rectangle extends Shape {
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