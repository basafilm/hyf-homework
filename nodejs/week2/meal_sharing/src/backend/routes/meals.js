const express = require('express')
const router = express.Router()
const meals = require('../data/meals.json');
   //  Respond with the json for the meal with the corresponding id

   router.get('/meals/:id',(req, res )=> {
   let mealId = Number(req.params.id)
   let mealWithId = meals.filter(meal => mealId === meal.id)
   const mealAndId = mealWithId.map(m => m );

   return res.send(JSON.stringify(mealAndId))
})

// Respond with the json for all the meals
router.use(function(req, res, next) {
   for (var key in req.query)
   { 
     req.query[key.toLowerCase()] = req.query[key];
   }
   next();
 });
 router.get('/meals', function (req, res) {

   let maxPriceReq =Number(req.query.maxprice)
   const mealTitle = req.query.title
   const createdAfter = (req.query.createdAfter)
   const createdDate = Date.parse(createdAfter)
   let limit = Number(req.query.limit)

   const mealsQuery = meals.filter((meal) =>{
      if (maxPriceReq) {
         return maxPriceReq <= meal.price;
        
      } else if (limit) {
         return meal.id <= limit;

      } else if (mealTitle) {
         return meal.title.includes(mealTitle)
         
      } else if (createdDate) {
         const creatD = Date.parse(meal.createdAt)
        return creatD >= createdDate;
      
      } else if(meals){
         return meals;

      } else {
         console.error('error')
      }
    })


   const mealReturn = mealsQuery.map(m => m);

    res.json(mealReturn)
});

module.exports = router