const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  firstName: {
    required: [true, "Which is the First Name?"],
    type: String
  },
  middleName: {
    type: String,
    default: ''
  },
  lastName: {
    required: [true, "Which is the Last Name?"],
    type: String
  },
  birthDate: {
    required: [true, "Which is the Birth Date?"],
    type: Date
  },
  email: {
    required: [true, "Which is the Email?"],
    type: String
  },
  country: {
    required: [true, "Which is the Country?"],
    type: String
  },
  state: {
    required: [true, "Which is the State?"],
    type: String
  },
  city: {
    required: [true, "Which is the City?"],
    type: String
  },
  firstAddressLine: {
    required: [true, "Which is the Address Line 1?"],
    type: String
  },
  scndAddressLine: {
    type: String,
    default: ''
  },
  zipCode: {
    required: [true, "Which is the Zip Code?"],
    type: String
  },
  accountType: {
    required: [true, "Which is the Account Type?"],
    type: String,
    enum: ['Trial', 'Pro'],
  },
  history: {
    type: []
  }
});

var User = mongoose.model('user', userSchema);

module.exports = User;