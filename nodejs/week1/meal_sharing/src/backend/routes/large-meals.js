const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
// geting large meals that serve more than 8 people
module.exports = function largeMealsAndReviews (req, res){

   const largeMealReview  =meals.map( meal =>{
      meal.reviews = reviews.filter(review => review.mealId===meal.id)
      return meal
   });
   const larg = largeMealReview.filter(l=> l.maxNumberOfGuests>= 8)
   
   res.send(larg)
   };