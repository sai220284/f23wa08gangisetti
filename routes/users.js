var express = require('express');
var router = express.Router();

let sum = 0;
let more = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  router.get('/', (req, res) => {
    more += 1;
    sum += more;
  
    // ... your other code ...
  
    // Send the response with the updated sum
    res.send(`Sum is: ${sum}`);
  });
  
  res.send('respond with a resource');
});

module.exports = router;
