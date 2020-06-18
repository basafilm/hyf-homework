class Circle {
    constructor (radius) {
      this.radius = radius
    }

    getArea() {
        const area = Math.PI * Math.pow(this.radius, 2)
        return Math.round(area)
  
    }

    getCircumference() {
     const circumference = 2 * Math.PI * this.radius 
     return circumference
    }
    getDiameter() {
        const diameter = 2 * this.radius
        return diameter
  
    }
}

const circle1 = new Circle(10 + 5);
console.log(`Circle Diameter : ${circle1.getDiameter()}`); // 20
const circle2 = new Circle(15);
console.log(`Circle Area : ${circle2.getArea()}`);
