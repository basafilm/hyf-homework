const express = require("express");
const bodyParser = require('body-parser');
const app = express();


const port = process.env.PORT || 3000
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const calculator = require('./router/calculator');



app.use(calculator);

app.get("/", (req, res) => {

    res.send('homework week-3')
 });


app.listen(port, () => console.log(`app listening at localhost: http://localhost:${port}`));