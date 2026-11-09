const rectObj = {
  width: 50,
  height: 30,
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * this.width + 2 * this.height;
  },
};

console.log(rectObj.area());
