const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
//const reservations = require('../data/reservations.json');


module.exports = (req, res) => {

   const cheapMealReview =meals.filter( meal =>{
      meal.reviews = reviews.filter(review => review.mealId===meal.price<= 75)
      return meal
   });
   
      res.send(cheapMealReview)
   };