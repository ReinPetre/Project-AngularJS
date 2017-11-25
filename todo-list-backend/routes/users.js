var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let User = mongoose.model('User');


router.post('/register', function (req, res, next) {
  if (!req.body.username || !req.body.password || !req.body.firstname || !req.body.lastname || !req.body.email) {
    return res.status(400).json({
      message: 'Please fill out all fields'
    });
  }
  // For testing with postman
  //res.json({succes: true, msg: "User is registered"});
  var user = new User();
  user.username = req.body.username;
  user.fistname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.email = req.body.email;
  user.setPassword(req.body.password)
  user.save(function (err) {
    if (err) {
      return res.json({
        msg: err
      })
    }
    return res.json({
      token: user.generateJWT()
    })
  });
});

router.post('/login', function (req, res, next) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).json({
      message: 'Please fill out all fields'
    });
  }
  // For testing with postman
  //res.json({success: true, msg: "User is logged in"});
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (user) {
      return res.json({
        token: user.generateJWT()
      });
    } else {
      return res.status(401).json(info);
    }
  })(req, res, next);
});

router.post('/checkusername', function (req, res, next) {
  // if (req.body.username) {
  User.find({
    username: req.body.username
  }, function (err, result) {
    if (result.length) {
      res.json({
        'username': 'alreadyexists'
      })
    } else {
      res.json({
        'username': 'ok'
      })
    }
  });
  // }
});

module.exports = router;