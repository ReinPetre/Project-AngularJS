var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let User = mongoose.model('User');


router.post('/register', function (req, res, next) {
  if (!req.body.username || !req.body.password || !req.body.firstname || !req.body.lastname || !req.body.email) {
    return res.json({
      message: 'Please fill out all fields'
    });
  }
  // For testing with postman
  //res.json({succes: true, msg: "User is registered"});
  var user = new User();
  user.username = req.body.username;
  user.firstname = req.body.firstname;
  user.lastname = req.body.lastname;
  user.email = req.body.email;
  user.setPassword(req.body.password)
  console.log(user);
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
    return res.json({
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
        token: user.generateJWT(),
        user: user
      });
    } else {
      return res.json(info);
    }
  })(req, res, next);
});

router.post('/checkusername', function (req, res, next) {
  if (req.body.username) {
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
  }
});


// Get user by username
router.get('/:username', function (req, res) {
  req.user.populate('projects', function (err, rec) {
    if (err) return next(err);
    res.json(rec);
  });
});


router.param('username', function (req, res, next, username) {
  let query = User.findOne({
    username: username
  });
  query.exec(function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return next(new Error('not found ' + username));
    }
    req.user = user;
    return next();
  });
});

module.exports = router;