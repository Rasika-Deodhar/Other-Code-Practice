var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var book = require('./routes/book');
var watch = require('./routes/watch');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book', book);
app.use('/watch', watch);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.sendStatus(err.status);
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-angular6', { promiseLibrary: require('bluebird') })
  .then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

module.exports = app;