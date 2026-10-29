import { Circle } from "./classes/circle.js";
import { Rectangle } from "./classes/rectangle.js";

const circle1 = new Circle('yellow', 40);
const rectangle1 = new Rectangle('blue', 10, 20);

circle1.sayHello();
rectangle1.sayHello();
circle1.getColor();
console.log(rectangle1.getArea());