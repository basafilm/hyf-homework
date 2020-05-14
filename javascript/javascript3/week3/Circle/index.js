//Paint a circle to a canvas element


class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x
        this.y = y
        this.r = r 
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.fillColor = fillColor
    }
    draw(){

const creatCanvas = document.getElementById('canvasSection');
const context = creatCanvas.getContext('2d')
context.beginPath();
context.arc(this.x,this.y,this.r,this.startAngle , this.endAngle);
context.fillStyle = this.fillColor;
context.fill();
context.stroke();  

    }
}
const c1 = new Circle(100, 100, 50, 0, 2 * Math.PI, '#FF0000');
const c2 = new Circle(100, 100, 40, 0, 2 * Math.PI, '##800000');
const c3 = new Circle(100, 100, 30, 0, 2 * Math.PI, '#8B0000');
const c4 = new Circle(100, 100, 20, 0, 2 * Math.PI, '#FF6347');
c1.draw();
c2.draw()
c3.draw();
c4.draw()

//Now lets make art!

const windw =document.querySelector('body').addEventListener( 'mouseenter', ()=>{
    class NewCircle {
    
        constructor(x, y, r, startAngle, endAngle, fillColor){
            this.x = x
            this.y = y
            this.r = r 
            this.startAngle = startAngle
            this.endAngle = endAngle
            this.fillColor = fillColor
            setInterval(
                this.draw.bind(this), 1000);  
        }
        draw(){
            const creatCanvas = document.getElementById('canvasSection');
            const context = creatCanvas.getContext('2d')
            this.width = creatCanvas.width
            this.height = creatCanvas.height  
            context.beginPath();
            context.arc(
                Math.random() * this.x,
                Math.random() * this.y,
                Math.random() * this.r,
                this.startAngle , 
                this.endAngle);
            context.fillStyle =  generateColor();
            context.fill();
            context.noStroke();       
        }
       
    }
    
        const c5 = new NewCircle(500, 100, 50, 0, 2 * Math.PI, "FF0000");
        const c6 = new NewCircle(200, 200, 40, 0, 2 * Math.PI, "FF5080");
        const c7 = new NewCircle(300, 500, 30, 0, 2 * Math.PI, "FF 8010" );
        const c8 = new NewCircle(100, 300, 20, 0, 2 * Math.PI, "FF9735");
        c5.draw();
        c6.draw()
        c7.draw();
        c8.draw()
    
    function generateColor(){
        let red  = 255 * Math.random();
        let green = 255 * Math.random();
        let blue = 255 * Math.random();
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }
})
