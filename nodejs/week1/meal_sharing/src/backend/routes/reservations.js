// const meals = require('../data/meals.json');
// const reviews = require('../data/reviews.json');
const reservations = require('../data/reservations.json');

module.exports = (req, res) => {

   const mealesRvations =reservations.map(reserves =>{
     
      return reserves
   });
   
      res.send(mealesRvations)
   };