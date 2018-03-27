var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/vote',function(req, res, next){
  res.render('vote');
});
module.exports = router;
