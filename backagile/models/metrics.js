const mongoose = require("mongoose");

var metricsSchema = new mongoose.Schema({
  title: {
    required: [true, "Whats is the title?"],
    type: String
  },
  icon: {
    required: [true, "Font awesome class of the icon"],
    type: String
  },
  value: {
    required: [true, "Whats is the value?"],
    type: Number
  },
  currency: {
    required: [true, "What is the currency?"],
    type: String,
    enum: ['number', 'money'],
  },
  signal: {
    required: [true, "What is the signal?"],
    type: String,
    enum: ['positive', 'negative']
  },
  objects: {
    required: [true, "No objects recieved"],
    type: []
  }
});

var Metrics = mongoose.model('metrics', metricsSchema);

module.exports = Metrics;