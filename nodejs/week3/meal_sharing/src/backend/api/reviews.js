const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns all reviews
router.get("/", async (request, response) => {
    try {
      const reviews = await knex("reviews").select("*");
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });

// Adds a new reviews		
  router.post("/", async (request, response) => {
    try {
      const newReviews = {
        title: req.query.title,
        description: req.query.description,
        stars: req.query.stars,
        meal_id: req.query.meal_id,
        created_date: req.query.created_date
      }
      await knex('reviews').insert(newReviews)
      response.send('reviews posted')
    } catch (error) {
      throw error;
    }
  });

// Returns reviews by id	
  router.get("/:id", async (request, response) => {
    try {
      const reviewsId = await knex('reviews').select('*').where(
        {'id' : request.params.id}
      );
      response.json(reviewsId);
    } catch (error) {
      throw error;
    }
  });

// Updates reviews by id	
  router.put("/:id", async (request, response) => {
    try {
      const updatReviews = await knex('reviews').where(
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
      response.json(updatReviews);
    } catch (error) {
      throw error;
    }
  });

// // Deletes reviews by id
  router.delete("/:id", async (request, response) => {
    try {
      const deleteReviews = await knex('reviews').where(
        {'id' : request.params.id}).delete()
        response.json(deleteReviews);
    } catch (error) {
      throw error;
    }
  });



module.exports = router;