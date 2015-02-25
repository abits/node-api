"use strict";

const
  express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  flash = require('connect-flash'),
  handlebars = require('express-handlebars'),
  LocalStrategy = require('passport-local').Strategy,
  logger = require('morgan'),
  passport = require('passport'),
  session = require('express-session');