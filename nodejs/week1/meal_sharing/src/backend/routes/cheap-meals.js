const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
// geting cheap meals and their reviews 
module.exports = function cheapMealAndReviews (req, res){

   const cheapMealReviews  =meals.map( meal =>{
      meal.reviews = reviews.filter(review => review.mealId===meal.id)
    return meal
   });
   let cheapMeal= cheapMealReviews.filter(m=> m.price<= 75)
 

   res.send(cheapMeal)
   };