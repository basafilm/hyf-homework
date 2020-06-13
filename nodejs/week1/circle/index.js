class Circle {
    constructor (radius) {
      this.radius = radius
    }


    getDiameter() {
        const diammeter = 2 * this.radius
        return diammeter.toFixed(2)
    }

    getCircumference() {
     const circumference = 2 * Math.PI * this.radius 
     return circumference.toFixed(2)
    }

    getArea() {
        const area = Math.PI * this.radius * this.radius
        return area.toFixed(2)
    }
}

const circle1 = new Circle(10);
console.log("Circle Diameter :" + circle1.getDiameter()); // 20
const circle2 = new Circle(15);
console.log("Circle Area : " + circle2.getArea());

// malekshafii@Maleks-iMac week1 % node index.js 
// Circle Diameter :20.00
// Circle Area : 706.86
// malekshafii@Maleks-iMac week1 % 

