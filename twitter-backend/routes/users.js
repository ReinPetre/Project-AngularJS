const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

});

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  })

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg: 'Failed to register user'});
    }
    else{
      res.json({success: true, msg: 'User registered'});
    }
  });
});

// Authorize
router.post('/authorize', (req, res, next) => {
  res.send('Authorize');
});

// Profile
router.get('/register', (req, res, next) => {
  res.send('PROFILE');
});

module.exports = router;
