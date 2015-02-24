'use strict';

module.exports = function(app) {
  app.get('/signin', function(req, res) {
    res.render('signin', {layout: 'main'});
  });
  app.post('/signin', function(req, res) {
    let username = 'christoph.martel@gmail.com';
    let password = 'password';
    if ((req.body.email != username) || (password != req.body.password)) {
      res.writeHead(302, {});
      res.end();
    } else {
      console.log("it worked");
      req.flash('test', 'it worked');
      res.redirect('/');
    }
  })
}