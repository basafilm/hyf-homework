const express = require("express");
const router = express.Router();
const knex = require("../database");

// Returns all reservations	
router.get("/", async (request, response) => {
    try {
      const reservations = await knex("reservations").select("*");
      response.json(reservations);
    } catch (error) {
      throw error;
    }
  });

// Adds a new reservations		
  router.post("/", async (request, response) => {
    try {
      const newReservations = {
        title: req.query.title,
        description: req.query.description,
        location: req.query.location,
        when: req.query.when,
        max_reservations: req.query.max_reservations,
        price: req.query.price,
        created_date: req.query.created_date
      }
      await knex('reservations').insert(newReservations)
      response.send('Reservations posted')
    } catch (error) {
      throw error;
    }
  });

// Returns reservations	 by id	
  router.get("/:id", async (request, response) => {
    try {
      const reservationsId = await knex('reservations').select('*').where(
        {'id' : request.params.id}
      );
      response.json(reservationsId);
    } catch (error) {
      throw error;
    }
  });

// Updates reservations	 by id	
  router.put("/:id", async (request, response) => {
    try {
      const updatReservations = await knex('reservations').where(
        {'id' : request.params.id}).update(
          {
            number_of_guests: req.query.number_of_guests,
            meal_id: req.query.meal_id,
            created_date: req.query.created_date
          })
      response.json(updatReservations);
    } catch (error) {
      throw error;
    }
  });

// // Deletes reservations by id
  router.delete("/:id", async (request, response) => {
    try {
      const deleteReservations = await knex('reservations').where(
        {'id' : request.params.id}).delete()
        response.json(deleteReservations);
    } catch (error) {
      throw error;
    }
  });



module.exports = router;