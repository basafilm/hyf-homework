const getMealsAndReviews = require('../data/meals-and-reviews.js')

// geting all meals and their reviews
module.exports = function mealsAndReviews (req, res){
   return res.send(getMealsAndReviews )
};