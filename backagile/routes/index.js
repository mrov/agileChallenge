var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello world")
});

/* GET home page. */
router.get('/a', function(req, res, next) {
  res.send("hello world")
});

module.exports = router;
