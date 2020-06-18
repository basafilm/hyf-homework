const getMealsAndReviews = require('../data/meals-and-reviews.js')

// // geting cheap meals and their reviews 
module.exports = (req, res)=>{
   let cheapMeal= getMealsAndReviews.filter(m=> m.price<= 75)
   res.send(cheapMeal)
   };
  