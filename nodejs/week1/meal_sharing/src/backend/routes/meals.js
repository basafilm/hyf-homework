const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
// geting all meals and their reviews
module.exports = function mealsAndReviews (req, res){

const mealsReviews =meals.map( meal =>{
   meal.reviews = reviews.filter(review => review.mealId===meal.id)
   return meal
});

   res.send(mealsReviews)
};