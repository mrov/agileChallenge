const Metrics = require('../models/metrics');

var metricsController = {
  getMetrics: (req, res) => {
    Metrics.find({})
      .then(metrics => {
        res.status(200).json(metrics);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  },
  saveMetrics: (req, res) => {
    let data = {};

    console.log(req.body.objects);
    console.log(typeof req.body.objects);

    data['title'] = req.body.title;
    data['icon'] = req.body.icon;
    data['value'] = req.body.value;
    data['currency'] = req.body.currency;
    data['signal'] = req.body.signal;
    data['objects'] = req.body.objects;

    var metrics = new Metrics(data);

    metrics.save(function (err, newMetric) {
      if (err) res.status(500).json(err);
      res.status(200).json(newMetric);
    })
  }
}

module.exports = metricsController;