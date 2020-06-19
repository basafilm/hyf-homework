const express = require('express');
const { response } = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Node js week-2 howmwork'))



app.get('/numbers/add', function (req, res) {
const a  = Number(req.query.first)
const b  = Number(req.query.second)
let sum = a + b
if(sum) {
    return res.send(`Sum of numbers : ${sum} `)
} else {
    return res.send(`incorrect values`)
}
});


app.get('/numbers/multiply/:first/:second', function (req, res) {
    const a  =Number(req.params.first)
    const b  =Number(req.params.second)
    let multipl = a * b

    if(multipl) {
        return res.send(`The multiplay of numbers : ${multipl}`)
    } else {
        return res.send(`incorrect values`)
    }
    
    });


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))