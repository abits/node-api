'use strict';

const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  flash = require('connect-flash'),
  cookieParser = require('cookie-parser'),
  session = require('express-session'),
  handlebars = require('express-handlebars'),
  bodyParser = require('body-parser');
  app.engine('.hbs', handlebars({extname: '.hbs'}));
  app.set('view engine', '.hbs');
  app.use(cookieParser('secret'));
  app.use(session({cookie: { maxAge: 60000 }}));

app.use(logger('dev'));
app.use(express.static(__dirname + '/node_modules/bootstrap'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(flash())

app.get('/', function(req, res, next) {
    res.render('home', {layout: 'main', messages: req.flash('test')});
})

require('./lib/auth.js')(app);

app.listen(3000, function() {
  console.log("ready captain.");
})