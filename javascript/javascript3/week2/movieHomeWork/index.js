//Movies exercise
const movieUrl= "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
var LowRatedMovies=document.getElementById('badMovies').rows[0].cells;
const badMoviesYear =document.getElementById('badMoviesSince2002').rows[0].cells;
console.log(LowRatedMovies)
fetch(movieUrl)
.then(res=>res.json())
.then(function (movies){
 const lowRatedM = movies.filter(movie=> movie.rating< 3);
           const badMoviesTitle = lowRatedM.map(t=>`<ul>${t.title}</ul>`);
           const badMoviesRate = lowRatedM.map(rat=>`<ul>${rat.rating}</ul>`);
           LowRatedMovies[0].innerHTML = ` Bad Rated Movies Title: <li>${badMoviesTitle.join('')}</li>`
           LowRatedMovies[1].innerHTML = ` Rating: <li>${badMoviesRate.join('')}</li>`

  
    const belowRatedMoviesSince2000= movies.filter(movie=> movie.year<2000 && movie.rating<5)
         const badMoviesYearTitle = belowRatedMoviesSince2000.map(MTitle =>`<ul> ${MTitle.title}</ul>`);
         const badMoviesYearRating= belowRatedMoviesSince2000.map(rat => `<ul>${rat.rating}</ul>`);
         const badMoviesYearProductionDate= belowRatedMoviesSince2000.map(y => `<ul>${y.year}</ul>`);
         badMoviesYear[0].innerHTML= `Bad Movies Titles Since Year 2000: ${badMoviesYearTitle.join('')}`;
         badMoviesYear[1].innerHTML= `Rating : ${badMoviesYearRating.join('')}`;
         badMoviesYear[2].innerHTML= `Production Year: ${badMoviesYearProductionDate.join('')}`;
    })
 


//Promise that resolves after set time

function resolveAfterSetOfTimes(resolveAfter) {
        return new Promise(resolve => {
            setTimeout(()=>{
              resolve('I am called asynchronously')  
            },resolveAfter * 1000)
        });

};
resolveAfterSetOfTimes(3)
.then(resolveFirst =>{
    console.log(resolveFirst)
})

const resolveAfter =async() =>{
    const result  =  await resolveAfterSetOfTimes(8)
    console.log(result);
};
resolveAfter()
