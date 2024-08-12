import { Shape } from "./shape.js";

export class Rectangle extends Shape {
    constructor(color, width = 20, height = 20) {
        // if (width < 0 || height < 0) {
        //     throw new Error('Data is not correct');

        // }
        super(color);

        this._width = width;
        this.height = height;

    }

    set width(value) {
        this._width = value;

    }

    get width() {
        return this._width;
    }

    area() {
        return this.width * this.height;
    }

}