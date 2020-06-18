const meals = require('./meals.json');
const reviews = require('./reviews.json'); 

function getMealsAndReviews(){
    const mealsAndReviews = meals.map( meal =>{
        meal.reviews = reviews.filter(review => review.mealId===meal.id)
        return meal
    })
    return mealsAndReviews
};

module.exports = getMealsAndReviews();