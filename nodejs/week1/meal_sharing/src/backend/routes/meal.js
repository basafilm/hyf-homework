const getMealsAndReviews = require('../data/meals-and-reviews.js')
// geting a single meal by random 
module.exports = (req, res) =>{
   let randomMeal = getMealsAndReviews[Math.floor(Math.random() * getMealsAndReviews.length)]
    res.send(randomMeal)
};