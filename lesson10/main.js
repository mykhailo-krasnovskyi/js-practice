import { Circle } from "./classes/Circle.js";
import { Rectangle } from "./classes/Rectangle.js";
import { Shape } from "./classes/Shape.js";

const shape = new Shape('red');
const circle = new Circle('black', 300);
const rectangle = new Rectangle('yellow', 10, 20);

rectangle.printColor();
circle.printColor();

shape.printColor();

console.log(rectangle);
console.log(circle);

console.log(circle.getArea());

console.log(rectangle.getArea());