// Rewrite time
const myLocation =document.getElementById('myLocation')
const pTage = document.getElementById("p")
const link = document.getElementById('a')

function setTimeoutPromise(time){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve('Called after 3 seconds')
        },time * 1000)
    })   
}
async function getCurrentPosition(resolve){
    try{
        const postion = await setTimeoutPromise(5)
        navigator.geolocation.getCurrentPosition((position)=>{
        const latitude =position.coords.latitude;
        const longitude =position.coords.longitude
        link.href =`${latitude} ${longitude}`;
        link.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        resolve(postion)
    });
    }catch(err){
        pTage.textContent =`${err}`
    }
}
myLocation.addEventListener('click', getCurrentPosition)

