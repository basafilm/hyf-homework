// Weather app
const myKey ="efe28836fdf80aeac319e828033d2561"
function myFunction(){
    let cityName = document.getElementById("myInput").value;
    const weatheUrl=  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myKey}`
fetch(weatheUrl)
.then(response => response.json())
.then(result=>{
const city= result.name;
const country = result.sys.country;
    let cphWeather = result.weather.map(weather=>{
        return  weather.main
    })
    let weatherDisc= result.weather.map(discription=>{
        return discription.description
    })
//temperature
    let teperature =parseFloat((result.main.temp-273.15).toFixed(2));
    let feels =parseFloat((result.main.feels_like-273.15).toFixed(2));
// Sun rise and set
   let sunRise =new Date(result.sys.sunrise * 1000).toUTCString().slice(-12, -7);
   let sunSet = new Date(result.sys.sunset * 1000).toUTCString().slice(-12, -7);
// wind
   let getWind = parseFloat((result.wind.speed* 1.609344).toFixed(2));
// map   
        const cities =document.querySelector('table').rows[0].cells
        cities[0].innerHTML=` <h3>${city}, ${country}:</h3>`
        const weather = document.querySelector('table').rows[1].cells
        weather[0].innerHTML= `Situation : ${cphWeather}`
        const weather1 = document.querySelector('table').rows[1].cells
        weather1[1].innerHTML= `Intensity : ${weatherDisc}`
//temperature
        const temper = document.querySelector('table').rows[2].cells
        temper[0].innerHTML= `Temperature :${teperature}&#8451;`
        const feel = document.querySelector('table').rows[2].cells
        feel[1].innerHTML= `Feels Like:<span> ${feels}&#8451;`
// Sun rise and set
        const sun = document.querySelector('table').rows[3].cells
        sun[0].innerHTML= `Sun Rise :${sunRise}`
        const set = document.querySelector('table').rows[3].cells
        set[1].innerHTML= `Sun Set: ${sunSet}`
// wind
        const windSpeed = document.querySelector('table').rows[4].cells
        windSpeed [0].innerHTML= `Wind Speed: ${getWind} kph`
    
   console.log(result)
})
.catch(error => {
    alert(error)
});
};
 
