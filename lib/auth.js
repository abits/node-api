'use strict';
require('./lib/constants.js');

module.exports = function(app) {
  app.get('/signin', function(req, res) {
    res.render('signin', {layout: 'main'});
  });
  app.post('/signin',
           passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
           function(req, res) {
            req.flash('test', 'it worked');
            res.redirect('/');
          })
}