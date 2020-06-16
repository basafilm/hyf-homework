
const reservations = require('../data/reservations.json');
// geting all reservations with their reviews
module.exports = function getMealReservations (req, res){ 
    const mealsReservations =reservations.map(reserves =>{
     
      return reserves
   });
   
      res.send(mealsReservations)
   };