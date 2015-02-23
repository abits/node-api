'use strict';

const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  handlebars = require('express-handlebars'),
  bodyParser = require('body-parser');
  app.engine('.hbs', handlebars({extname: '.hbs'}));
  app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.static(__dirname + '/node_modules/bootstrap'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res, next) {
  res.send("root page");
})

require('./lib/auth.js')(app);

app.listen(3000, function() {
  console.log("ready captain.");
})