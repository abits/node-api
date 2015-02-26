"use strict";

var users = [
  {'id'      : 1,
   'username': 'christoph.martel@gmail.com',
   'password': 'password'}
]

var findByUsername = function(username, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.username === username) {
      return fn(null, user);
    }
  }
  return fn(null, null);
}
