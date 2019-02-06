var express = require('express');
var router = express.Router();
var metricsController = require("../controllers/metrics");

/* Get all metrics */
router.get('/', metricsController.getMetrics);
/* Create a metrics */
router.post('/', metricsController.saveMetrics);

module.exports = router;
