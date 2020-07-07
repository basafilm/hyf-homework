const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns all reviews
router.get("/", async (request, response) => {
    try {
      const reviews = await knex("review").select("*");
      response.json(reviews);
    } catch (error) {
      throw error;
    }
  });
  // Returns reviews by id	
  router.get("/:id", async (request, response) => {
    const { id } = request.params;

    try {
      const reviewsId = await knex('review').select('*').where({id});
      const getRev =reviewsId.map(rev=>rev.id)
        if ( getRev.length === 0) {
          response.send(`Review with the Id: ${id} not exist!`);
        } else {
          response.json(reviewsId);
        }

    } catch (error) {
      throw error;
    }
  });

// Adds a new reviews		
  router.post("/", async (req, response) => {
    try {
      const newReviews = {
        title: req.body.title,
        description: req.body.description,
        stars: req.body.stars,
        mealId: req.body.mealId,
        created_date: req.body.created_date
      }
      await knex('review').insert(newReviews)
      response.send('reviews posted')
    } catch (error) {
      throw error;
    }
  });

// Updates reviews by id	
  router.put("/:id", async (req, res) => {
    const {id}= req.params
    try {
      const updatReviews = await knex('review').where({id})
      .update({
            title: req.body.title,
            description: req.body.description,
            stars: req.body.stars,
            mealId: req.body.mealId,
            created_date: req.body.created_date

          })
      res.json(`${updatReviews} review with id ${id} Updated `);
    } catch (error) {
      throw error;
    }
  });

// // Deletes reviews by id
  router.delete("/:id", async (request, response) => {
    const { id } =request.params;
    try {
      const reviews = await knex('review').where({id})
      const deletedReviews = await knex('review').where({id}).delete()
      const getRev =reviews.map(rev=>rev.id)
        if (getRev.length === 0) {
            response.send(`Review with the Id: ${id} not exist!`);
        } else {
          response.json(deletedReviews);
        }
      
    } catch (error) {
      throw error;
    }
  });



module.exports = router;