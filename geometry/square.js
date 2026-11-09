export class Square {}
export const rectangle = new Rectangle(5, 3);
export const square = new Square(4);

import class Rectangle {}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

