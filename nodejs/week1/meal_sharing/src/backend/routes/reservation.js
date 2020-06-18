const resarvations = require('../data/reservations.json');

// geting a single reservation by random 
module.exports = function randomSingleReservation(req, res){
      res.send(
          resarvations[Math.floor(Math.random() * resarvations.length)]
              )
   };
