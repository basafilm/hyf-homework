const express = require("express");
const router = express.Router();
const knex = require("../database");


// Returns all meals	
    router.get("/", async (request, response) => {
      try {
        const meals = await knex("meals").select("*");
        response.json(meals);
      } catch (error) {
        throw error;
      }
    });

// Adds a new meal	
    router.post("/", async (request, response) => {
      try {
        const newMeals = {
          title: req.query.title,
          description: req.query.description,
          location: req.query.location,
          when: req.query.when,
          max_reservations: req.query.max_reservations,
          price: req.query.price,
          created_date: req.query.created_date
        }
        await knex('meals').insert(newMeals)
        response.send('meal posted')
      } catch (error) {
        throw error;
      }
    });

// Returns meal by id	
    router.get("/:id", async (request, response) => {
      try {
        const mealId = await knex('meals').select('*').where(
          {'id' : request.params.id}
        );
        response.json(mealId);
      } catch (error) {
        throw error;
      }
    });

// Updates the meal by id	
    router.put("/:id", async (request, response) => {
      try {
        const updatMeal = await knex('meals').where(
          {'id' : request.params.id}).update(
            {
              title: req.query.title,
              description: req.query.description,
              location: req.query.location,
              when: req.query.when,
              max_reservations: req.query.max_reservations,
              price: req.query.price,
              created_date: req.query.created_date

            })
        response.json(updatMeal);
      } catch (error) {
        throw error;
      }
    });

// // Deletes the meal by id
    router.delete("/:id", async (request, response) => {
      try {
        const deleteMeal = await knex('meals').where(
          {'id' : request.params.id}).delete()
          response.json(deleteMeal);
      } catch (error) {
        throw error;
      }
    });



// GET api/meals/ query parameters (Command out above apis for at below apis work)

router.use(function(req, res, next) {
 // using  to insensitive req letters
  for (var key in req.query)
  { 
    req.query[key.toLowerCase()] = req.query[key];
  }
  next();
});
router.get("/", async (req, res) => {
  try {
    const {
      maxPrice,
      availableReservations,
      title,
      createdAfter,
      limit } = req.query

    if (maxPrice) {
      // Get meals that has a price smaller than maxPrice
      const mealPrice = await knex('meals')
      .select('*')
      .where('price', '>', maxPrice)
      res.json(mealPrice);
      } if(!!availableReservations) {
          // Get meals that still has available reservations ?
          let availableMeal = await knex('meals')
          .select('*')
          knex.sum({total: 'reservations.number_of_guests'})
          .leftOuterJoin('reservations',function() {
            this.on('reservations.meal_id', '=', 'meals.id')
          })
          .where('meals.max_reservations', '<=', 'reservations.number_of_guests')
          .groupBy('reservations.id')
          .having('total', '<', 'meals.max_reservations')  
          res.json(availableMeal);
          } if(title) {
              // Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
              const mealtitle = await knex('meals')
              .select('*')
              .where('title', 'like' ,  `%${title}%`)
              res.json(mealtitle);
            } if(createdAfter) {
                //Get meals that has been created after the date
                const mealDateAfter = await knex('meals')
                .select('*')
                .where('created_date', '>' ,createdAfter)
                res.json(mealDateAfter);
            } if ( limit) {
                // Only specific number of meals
                const mealLimit = await knex('meals')
                .select('*')
                .limit(limit)
                res.json(mealLimit);
              }

  } catch (error) {
    throw error;
  }
});


module.exports = router;

