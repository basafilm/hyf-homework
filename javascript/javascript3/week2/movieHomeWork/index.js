//Movies exercise
const movieUrl= "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
// var badMovies=[];
// const badMoviesYear =[]
// console.log(badMovies)
fetch(movieUrl)
.then(res=>res.json())
.then(function (movies){
    for ( let value of movies) {
        if(value.rating<5){
           const badMovies = ` Bad Movies : "${value.title}"  Rated Number : |${value.rating}|`
           console.log(badMovies)
        // I was not able to push to the above empty array
        //    const rating = value.rating
        //    badMovies.push({
        //        title: title,
        //        rating:rating
        //    });
        }
    };
     movies.forEach(movie=>{
    if(movie.rating<5 && movie.year<2000){
         const badMoviesYear= `Bad Movies Since Year 2000: "${movie.title}"  Production Year : |${movie.year}|`;
          console.log(badMoviesYear) 
    }
    })
//console.log(movies)
});

//Promise that resolves after set time

function myOwn(resolveAfter) {
        return new Promise(resolve => {
            setTimeout(()=>{
                console.log('I am called asynchronously')
                resolve(resolveAfter)
            },8000)
        })
};
async function my(){
   try {
    const example = await myOwn()
    const url = await fetch(movieUrl)
    const res = await url.json()
    const movieTime =await res.map(time =>time.running_times)
    console.log(movieTime)
   }catch(err){
       console.error(err)
   }
}
my();
