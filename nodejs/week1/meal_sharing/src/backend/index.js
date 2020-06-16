const express = require('express')
const app = express()
const port = 3003
//  Her i'm using Meal_sharing data to send diffirent mixed data. 

 const mealsRouter = require("./routes/meals");
 const cheapMealsRouter = require("./routes/cheap-meals");
 const largeMealsRouter = require("./routes/large-meals");
 const mealRouter = require("./routes/meal"); 
 const reservationsRouter = require("./routes/reservations");
 const reservationRouter = require("./routes/reservation");

 app.get("/reservation", reservationRouter );
 app.get("/cheapMeals", cheapMealsRouter);
 app.get("/largeMeals", largeMealsRouter);
 app.get("/meal", mealRouter );
 app.get("/meals", mealsRouter);
 app.get("/reservations", reservationsRouter);


 app.get("/", (req, res) => {
    res.send('meal Sharing')
 });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

