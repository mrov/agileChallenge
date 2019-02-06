const User = require('../models/user');

var controller = {
  findUserbyId: (req, res) => {
    let _id = req.params._id || req.query._id;

    User.findById(_id)
    .select("-history")
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  },
  findHistorybyId: (req, res) => {
    let _id = req.params._id || req.query._id;

    User.findById(_id)
    .select("history -_id")
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(500).json(err);
      })
  },
  createUser: (req, res) => {
    let data = {}
    let _id = req.params._id || req.query._id;
    let nowDate = new Date();  
    
    // i could do a for/in but its easier to see the fields that way
    data['firstName'] = req.body.firstName;
    data['middleName'] = req.body.middleName;
    data['lastName'] = req.body.lastName;
    data['birthDate'] = new Date(req.body.birthDate);
    data['email'] = req.body.email;
    data['country'] = req.body.country;
    data['state'] = req.body.state;
    data['city'] = req.body.city;
    data['firstAddressLine'] = req.body.firstAddressLine;
    data['scndAddressLine'] = req.body.scndAddressLine;
    data['zipCode'] = req.body.zipCode;
    data['accountType'] = req.body.accountType;

    var user = new User(data);

    if (req.method === "POST") {
      data['history'] = {type: 'Creation', date: nowDate, formatedDate: getFormatedDate(nowDate), formatedHour: getFormatedHour(nowDate)};
      user.save(function (err, newUser) {
        if (err) res.status(500).json(err);
        res.status(200).json(newUser);
      })
    } else if (req.method === "PUT") {
      if (_id) {
        let history = {type: 'Edition', date: nowDate, formatedDate: getFormatedDate(nowDate), formatedHour: getFormatedHour(nowDate)};
        User.findOneAndUpdate(
          { '_id': _id},
          { $set: data, $push: { 'history': history } },
          { new: true, runValidators: true }
        )
          .then(user => {
            res.status(200).json(user);
          })
          .catch(err => {
            res.status(500).json(err);
          });
      }
    }
  },
};

// Aux functions
var getFormatedDate = function (date) {
  var dd = date.getDate();
  var mm = date.getMonth() + 1; // +1 because January is 0
  var yyyy = date.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  } 

  var today = dd + '/' + mm + '/' + yyyy;
  
  return today
}

var getFormatedHour = function (date) {
  var ss = date.getSeconds();
  var mm = date.getMinutes();
  var hrs = date.getHours();

  if (ss < 10) {
    ss = '0' + ss;
  } 
  if (mm < 10) {
    mm = '0' + mm;
  }
  if (hrs < 10) {
    hrs = '0' + hrs;
  }


  var hour = hrs + ':' + mm + ':' + ss;

  return hour;
}

module.exports = controller;