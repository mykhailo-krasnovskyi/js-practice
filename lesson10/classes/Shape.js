export class Shape {

    constructor(color) {
        this.color = color;
    }

    printColor() {
        console.log(`The color is ${this.color}`);
    }

    getArea() {
        throw new Error('Method getArea() must be implemented');
    }
}