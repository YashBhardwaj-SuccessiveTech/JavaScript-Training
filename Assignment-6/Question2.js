// 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    console.log("this will return area of the Shapes");
  }
}

class Rectangle extends Shape {
  getArea() {
    console.log(`Area of the Rectangle is: ${this.width * this.height}`);
  }
}

class Triangle extends Shape {
  getArea() {
    console.log(
      `Area of the Triangle is: ${(1 / 2) * this.width * this.height}`
    );
  }
}

const obj = new Rectangle(12, 12);
obj.getArea();

const obj2 = new Triangle(12, 4);
obj2.getArea();

const obj3 = new Shape();
obj3.getArea();
