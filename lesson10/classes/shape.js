export class Shape {
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