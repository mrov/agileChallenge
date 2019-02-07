var express = require('express');
var router = express.Router();
var userController = require("../controllers/user");

/* GET users listing {id, firstname, lastname}. */
router.get('', userController.findIdAndNames);
/* Get history by user id */
router.get('/history/:_id', userController.findHistorybyId);
/* Get user by id */
router.get('/:_id', userController.findUserbyId);
/* Create user */
router.post('/', userController.createUser);
/* Update user by id */
router.put('/:_id', userController.createUser);

module.exports = router;
