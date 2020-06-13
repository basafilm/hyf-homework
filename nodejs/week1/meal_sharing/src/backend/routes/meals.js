const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
//const reservations = require('../data/reservations.json');


module.exports = (req, res) => {

const mealsReviews =meals.map( meal =>{
   meal.reviews = reviews.filter(review => review.mealId===meal.id)
   return meal
});

   res.send(mealsReviews)
};