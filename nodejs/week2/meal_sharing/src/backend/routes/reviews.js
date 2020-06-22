const express = require('express')
const router = express.Router()
const reviews = require('../data/reviews.json'); 
// Respond with the json for the review with the corresponding id

   router .get('/reviews/:id',(req, res)=> {

   let revId = Number(req.params.id)
   let reviewId = reviews.filter(rev => revId === rev.id)
   const reviewAndId = reviewId.map(r => r);

   return res.send(JSON.stringify(reviewAndId))
  
});

// Respond with the json for all reviews
router .get('/reviews',(req, res)=> {

   return res.send(reviews)
  
});


module.exports = router;
