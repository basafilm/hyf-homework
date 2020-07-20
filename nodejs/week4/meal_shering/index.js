PORT = process.env.PORT || 3003
const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const mealsRouter = require("./src/backend/api/meals");
const reservationsRouter = require("./src/backend/api/reservations");
const reviewsRouter = require("./src/backend/api/reviews");
const mealsRev = require("./src/backend/api/available_reserve");
const port = process.env.PORT || 3003;
// For week4 no need to look into this!
// Serve the built client html
const buildPath = path.join(__dirname, "./src/frontend");
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);
router.use("/reviews", reviewsRouter);
router.use("/available_reserve", mealsRev);

app.use("/api", router);


app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./src/frontend/index.html"), function (
    err
  ) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
