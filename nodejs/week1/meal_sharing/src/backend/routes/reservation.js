// const meals = require('../data/meals.json');
// const reviews = require('../data/reviews.json');
const resarvations = require('../data/reservations.json');


module.exports = (req, res) => {
     
      res.send(
         resarvations[Math.floor(Math.random() * resarvations.length)]
      )
   };