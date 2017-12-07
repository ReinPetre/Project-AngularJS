var favicon = require('serve-favicon');

// Dependencies
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let mongoose = require('mongoose');
let passport = require('passport');
const cors = require('cors');
const config = require('./config/database');

require('dotenv').config({path: './app.env'})
require('./models/user');
require('./models/project');
require('./models/todo');

// Connect To Database
mongoose.connect(process.env.JUSTDOIT_DATABASE, { useMongoClient: true })

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+ config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

// Initializing Express
const app = express();

// Port Number
const port = process.env.PORT || 8080;


// Routes
var users = require('./routes/users');
var projects = require('./routes/projects');
var todos = require('./routes/todos');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// CORS Middleware
app.use(cors());


require('./config/passport');

app.use('/users', users);
app.use('/projects', projects);
app.use('/todos', todos);

// Index Route
app.get('/', (req, res) => {
  res.send('Hello world');
});

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});

/* // view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}); */

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
