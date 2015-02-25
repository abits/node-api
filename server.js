'use strict';
require('./lib/constants.js');

app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(cookieParser('secret'));
app.use(session({
  saveUninitialized: false,
  secret: 'wiodn9u09edjlwmc928198ujwlknxäsöl',
  resave: false,
  cookie: { maxAge: 60000 }}));

app.use(logger('dev'));
app.use(express.static(__dirname + '/node_modules/bootstrap'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(flash())

app.get('/', function(req, res, next) {
    res.render('home', {layout: 'main', messages: req.flash('test')});
})

passport.use(new LocalStrategy(
  function(username, password, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      findByUsername(username, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
        if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
        return done(null, user);
      })
    });
  }
))

require('./data/users.js');
require('./lib/auth.js')(app);

app.listen(3000, function() {
  console.log("ready captain.");
})