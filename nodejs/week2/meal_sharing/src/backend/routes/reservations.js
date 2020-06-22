
const express = require('express')
const router = express.Router()
const reservations = require('../data/reservations.json');
// geting reservation data and sending as json
// Respond with the json for the reservation with the corresponding id

router.get('/reservations/:id',(req, res)=> {

   let reserveId = Number(req.params.id)
   let reserveWithId = reservations .filter(reserve => reserveId === reserve.id)
   const reserveAndId = reserveWithId.map(r => r);

   return res.send(JSON.stringify(reserveAndId))
  
});
// Respond with the json for all reservations
router.get('/reservations',(req, res)=> {

      return res.send(reservations)
     
   });
    

module.exports = router