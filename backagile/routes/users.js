var express = require('express');
var router = express.Router();
var userController = require("../controllers/user");

/* GET users listing. */
router.get('/', function(req, res) {
  console.log(req.method);
  res.send('respond with a resource');
});

/* Get history by user id */
router.get('/history/:_id', userController.findHistorybyId);
/* Get user by id */
router.get('/:_id', userController.findUserbyId);
/* Create user */
router.post('/', userController.createUser);
/* Update user by id */
router.put('/:_id', userController.createUser);

module.exports = router;
