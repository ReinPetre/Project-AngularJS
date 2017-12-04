var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');
let jwt = require('express-jwt');

let auth = jwt({secret: process.env.SECRET, userProperty: 'payload'});

module.exports = router;
