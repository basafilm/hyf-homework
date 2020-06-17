const getMealsAndReviews = require('../data/meals-and-reviews.js')
// geting large meals that serve more than 8 people
module.exports = (req, res) => {
   const largeMealReview =getMealsAndReviews.filter((l)=> l.maxNumberOfGuests>= 8)
   res.send(largeMealReview )
   };