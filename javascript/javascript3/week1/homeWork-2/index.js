// Weather app
//efe28836fdf80aeac319e828033d2561

function myFunction(){
    const weatheUrl=  `https://api.openweathermap.org/data/2.5/weather?q=copenhagen,dk&appid=efe28836fdf80aeac319e828033d2561`
fetch(weatheUrl)
.then(response => response.json())
.then(resulte=>{
const cityName= resulte.name

    let cphWeather = resulte.weather.map(weather=>{
        return  weather.main
    })
    let weatherDisc= resulte.weather.map(discription=>{
        return discription.description
    })
//temperature
    let teperature =parseFloat((resulte.main.temp-273.15).toFixed(2));
    let feels =parseFloat((resulte.main.feels_like-273.15).toFixed(2));
// Sun rise and set
   let sunRise = new Date(resulte.sys.sunrise * 1000).toGMTString().slice(-12, -7);
   let sunSet = new Date(resulte.sys.sunset * 1000).toGMTString().slice(-12, -7);
// wind
   let getWind = parseFloat((resulte.wind.speed* 1.609344).toFixed(2));
// map   

    let runWeather = document.getElementById("myInput").value;
    if(runWeather.includes('Copenhagen')){
        const city =document.querySelector('table').rows[0].cells
        city[0].innerHTML=` <h3>${cityName}:</h3>`
        const weather = document.querySelector('table').rows[1].cells
        weather[0].innerHTML= `Situation : ${cphWeather}y`
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
    } else {
        alert('Here you can see onley Copenhagen\'s weather')
    }
     
    //console.log(resulte)
})
};
 
