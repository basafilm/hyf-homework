const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
// geting a single meal by random 
module.exports = function randomMealAndReview (reg, res) {
   const mealReview  =meals.map( meal =>{
       meal.reviews = reviews.filter(review => review.mealId === meal.id)
      return meal
   });
   let randomMeal = mealReview[Math.floor(Math.random() * mealReview.length)];
      res.send(randomMeal)
   };