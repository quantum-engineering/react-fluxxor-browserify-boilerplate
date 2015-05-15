
/**
 * Webapp Dependencies
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var Faker = require('faker');

var config = require('./config.json');

var app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', express.static(path.join(__dirname, 'public')));


/**
 * Dummy Data setup
 */

var userData = [];

for (i = 0; i < 20; i++) {
  userData.push({
    name: Faker.name.firstName() + ' ' + Faker.name.lastName(),
    id: Faker.random.uuid(),
    philosophy: Faker.hacker.phrase()
  });
}

var fakeData = [{
  name: 'Gregory',
  age: 26,
  gender: 'male',
  id: 1
}, {
  name: 'Mini',
  age: 24,
  gender: 'female',
  id: 2
}];


/**
 * Dummy Routes
 */

app.get('/users', function(req, res) {
  res.json(fakeData)
});

app.post('/users/new', function(req, res) {
  fakeData.push(req.body);
  res.json(fakeData);
});


/**
 * Application Port setup
 */

app.listen(config.port, function() {
  console.info('app server is listening on port 7777');
});
