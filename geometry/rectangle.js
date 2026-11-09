export { Rectangle, rectangle };
//export class Rectangle {}
//export const rectangle = new Rectangle(5, 3);

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * this.width + 2 * this.height;
  }
}

const rectangle = new Rectangle(5, 3);
