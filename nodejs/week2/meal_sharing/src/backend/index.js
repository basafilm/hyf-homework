//  Her i'm using Meal_sharing data to send diffirent data based on the requests. 

const express = require('express')
const app = express()
const port = process.env.PORT || 3005

 const mealsRouter = require("./routes/meals");
 const reservationsRouter = require("./routes/reservations");
 const reviewsRouter = require("./routes/reviews");
 app.use(mealsRouter);
 app.use(reservationsRouter);
 app.use(reviewsRouter );

 app.get("/", (req, res) => {
    res.send('meal Sharing week-2')
 });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));