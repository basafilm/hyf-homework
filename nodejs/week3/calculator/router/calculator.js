const express = require("express");
//const urlencodedParser = bodyParser.urlencoded({ extended: false })
const bodyParser = require('body-parser')
const router = express.Router();
router.use(bodyParser.json()) // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// Going to calculator/add?firstParam=1&secondParam=2&secondParam=4 should respond with 7.

router.get('/calculator/add', function (req, res) {
    const {firstParam}  =req.query
    const {secondParam }  =req.query

    let number1 = parseInt(firstParam);
    let numberFollow =Object.values(secondParam).reduce((x, y) => {
        return parseInt(x)  + parseInt(y)     
    })
     
     const add = number1 + numberFollow;
     if (!add) {
      return res.send(`incorrect values`)
     } else {
      return res.send(`Sum of numbers : ${add}`)
     }
  });
   
   
// Going to /calculator/multiply?firstParam=1&secondParam=2 should respond with 2.
// Going to /calculator/multiply?firstParam=1&secondParam=2&secondParam=4 should respond with 8.

      router.get('/calculator/multiply', function (req, res) {
      const {firstParam}  = req.query
      const {secondParam }  = req.query


      let number1 = [parseInt(firstParam)];
      let numberFollow = Object.values(secondParam).reduce((x, y) => { 
          return parseInt(x) * parseInt(y) ;
      });

        const multiply= number1 * numberFollow;
      
      if(!multiply) {
          return res.send(`incorrect values`)
      } else {
          return res.send(`The multiplay of numbers = ${multiply}`)
      }
  
      });

// Getting data through the request body using POST
      router.post('/calculator/divide', function (req, res) {
          const {firstParam } = req.body
          const {secondParam } = req.body
          const divide =parseInt(firstParam) / parseInt(secondParam)
          return res.send({divide});
      
      
      });
    

module.exports = router 