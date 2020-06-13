const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
//const reservations = require('../data/reservations.json');


module.exports = (req, res) => {

   const largeMealReview  =meals.map( meal =>{
      meal.reviews = reviews.filter(review => review.mealId===meal.maxNumberOfGuests>= 8)
      return meal
   });
   
      res.send(largeMealReview )
   };