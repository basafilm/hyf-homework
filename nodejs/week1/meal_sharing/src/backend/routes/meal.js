const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
//const reservations = require('../data/reservations.json');


module.exports = (req, res) => {
   const mealReview  =meals.map( meal =>{
       let randomMeal = meals[Math.floor(Math.random() * meals.length)];
       meal.reviews = reviews.filter(review => review.mealId === randomMeal.id)
      return randomMeal
   });
   
      res.send(mealReview)
   };