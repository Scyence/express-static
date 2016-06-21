var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/indexRoutes');
var searchRouter = require('./routes/searchRoutes');
var quickInstallRouter = require('./routes/quickInstallRoutes');
var internetAccessRouter = require('./routes/internetAccessRoutes');
var motionDetectionRouter = require('./routes/motionDetectionRoutes');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Uncomment after placing your favicon in /public
app.use(favicon(path.join (__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
  }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/Search', searchRouter);
app.use('/Quick_Installation/', quickInstallRouter);
app.use('/Internet_Access/', internetAccessRouter);
app.use('/Motion_Detection/', motionDetectionRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

// Error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          message: err.message,
          error: err,
        });
    });
}

// Production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
      });
  });


module.exports = app;
