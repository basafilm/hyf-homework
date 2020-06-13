const express = require('express')
const app = express()
const port = 3003

 app.get('/', (req, res) => res.send('Hello World!'))

 const mealsRouter = require("./routes/meals");
 app.get("/meals", mealsRouter);
 const cheapMealsRouter = require("./routes/cheap-meals");
 app.get("/cheapMeals", cheapMealsRouter);
 const largeMealsRouter = require("./routes/large-meals");
 app.get("/largeMeals", largeMealsRouter);
 const mealRouter = require("./routes/meal"); 
 app.get("/meal", mealRouter );
 const reservationsRouter = require("./routes/reservations");
 app.get("/reservations", reservationsRouter);
 const reservationRouter = require("./routes/reservation");
 app.get("/reservation", reservationRouter );

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

