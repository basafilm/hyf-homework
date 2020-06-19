//  Her i'm using Meal_sharing data to send diffirent data based on the requests. 

const express = require('express')
const app = express()
const port = process.env.PORT || 3001

//  Respond with the json for the meal with the corresponding id
const meals = require('./data/meals.json');

app.get('/meals/:id',(req, res )=> {

   let mealId = Number(req.params.id)
   let mealWithId = meals.filter(meal => mealId === meal.id)
   const mealAndId = mealWithId.map(m => m );

   return res.send(JSON.stringify(mealAndId))

});

// Respond with the json for all the meals
app.use(function(req, res, next) {
   for (var key in req.query)
   { 
     req.query[key.toLowerCase()] = req.query[key];
   }
   next();
 });
app.get('/meals', function (req, res) {

   let maxPriceReq =Number(req.query.maxprice)
   const mealTitle = req.query.title
   const createdAfter = (req.query.createdAfter)
   const createdDate = Date.parse(createdAfter)
   let limit = Number(req.query.limit)

   const mealsQuery = meals.filter((meal) =>{
      if (maxPriceReq) {
         return maxPriceReq <= meal.price;
        
      } else if (limit) {
         return meal.id <= limit;

      } else if (mealTitle) {
         return meal.title.includes(mealTitle)
         
      } else if (createdDate) {
         const creatD = Date.parse(meal.createdAt)
        return creatD >= createdDate;
      
      } else if(meals){
         return meals;

      } else {
         console.error('error')
      }
    })


   const mealReturn = mealsQuery.map(m => m);

    res.json(mealReturn)
});

// geting reservation data and sending as json
// Respond with the json for the reservation with the corresponding id

const reservations = require('./data/reservations.json');

app.get('/reservations/:id',(req, res)=> {

   let reserveId = Number(req.params.id)
   let reserveWithId = reservations .filter(reserve => reserveId === reserve.id)
   const reserveAndId = reserveWithId.map(r => r);

   return res.send(JSON.stringify(reserveAndId))
  
});

// Respond with the json for all reservations
app.get('/reservations',(req, res)=> {

   return res.send(reservations)
  
});

// Respond with the json for the review with the corresponding id

 const reviews = require('./data/reviews.json'); 

app.get('/reviews/:id',(req, res)=> {

   let revId = Number(req.params.id)
   let reviewId = reviews.filter(rev => revId === rev.id)
   const reviewAndId = reviewId.map(r => r);

   return res.send(JSON.stringify(reviewAndId))
  
});

// Respond with the json for all reviews
app.get('/reviews',(req, res)=> {

   return res.send(reviews)
  
});


 app.get("/", (req, res) => {
    res.send('meal Sharing')
 });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));