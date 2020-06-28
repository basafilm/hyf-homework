const express = require('express')
const router = express.Router()
const meals = require('../data/meals.json');
   //  Respond with the json for the meal with the corresponding id


   router.get('/meals/:id',(req, res )=> {
   let mealId = Number(req.params.id)
   let mealWithId = meals.filter(meal => mealId === meal.id)
   return res.send(mealWithId)
   
})

// Respond with the json for all the meals
router.use(function(req, res, next) {
   // to insensetive latters capital or lower cases 
   for (var key in req.query)
   { 
     req.query[key.toLowerCase()] = req.query[key];
   }
   next();
 });
 router.get('/meals', function (req, res) {

   let maxPriceReq =Number(req.query.maxprice)
   const mealTitle =parseInt(req.query.title)
   const createdAfter = (req.query.createdAfter)
   const createdDate = Date.parse(createdAfter)
   let limit = Number(req.query.limit)

   const mealsQuery = meals.filter((meal) =>{
      if (maxPriceReq) {
         return maxPriceReq >= meal.price;
        
      } else if (limit) {
         return meal.id <= limit;

      } else if (mealTitle) {
         const useExp = mealTitle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
         const pattern = new RegExp( "(?:^|\\W)" + useExp + "(?:$|\\W)", "i");
         return pattern.test(meal.title.includes(mealTitle));
         
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