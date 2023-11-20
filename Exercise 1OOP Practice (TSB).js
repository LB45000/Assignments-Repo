class Shape {
  constructor() {
    this.width = 0;
    this.height = 0;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.width = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.width * this.height;
  }
}

const myCircle = new Circle(5);
console.log("Area of the Circle:", myCircle.area());

const myTriangle = new Triangle(4, 6);
console.log("Area of the Triangle:", myTriangle.area());
