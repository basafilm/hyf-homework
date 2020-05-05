moveElement()
const redBox = document.querySelector('ul.marks2 li:nth-child(1)');
const blueBox = document.querySelector('ul.marks2 li:nth-child(2)');
const greenBox = document.querySelector('ul.marks2 li:nth-child(3)');
const boxes = [redBox, blueBox, greenBox];
const span = document.querySelector('span');

// This code will move the li to the position 100, 100. Calling moveElement will return a promise that resolves after the li element has been moved. 

moveElement(document.querySelector('ul.marks li:nth-child(1)'), {x: 20, y: 300})
    .then(() => {
        moveElement(document.querySelector('ul.marks li:nth-child(2)'), {x: 400, y: 300})
        .then(()=>{
            moveElement(document.querySelector('ul.marks li:nth-child(3)'), {x: 400, y: 20})
            .then(res=>{
                const span = document.querySelector('span');
                moveElement(document.querySelector(span), { x: 50, y: 50})
                return res(span)
                .then(()=>{
                console.log('Element has been moved');
                })
            })
        })
    });

 async function movie(){
     await new Promise( resolve=>setTimeout(resolve, 8000));
     try {
        let redCircle = moveElement(redBox, {x: 20, y: 300});
        let blueCircle = moveElement(blueBox, {x: 400, y: 300});
        let greenCircle = moveElement(greenBox, {x: 400, y: 20});
        Promise.all([redCircle , blueCircle , greenCircle]);
        
     }catch(err){
         console.error(err)
     }
 }
 movie()