var passport = require('passport');
var User = require('../models/userSchema');
var jwt = require('jsonwebtoken');
var BearerStrategy = require('passport-http-bearer');
    passport.use(new BearerStrategy(
        function(token, done) {
          jwt.verify(token, 'secretkey', function (error, decoded) {
            if(error) {
              return done(error);
            }
            User.findOne({ _id: decoded.user._id }, function (err, user) {
              if (err) { return done(err); }
              if (!user) { return done(null, false); }
              return done(null, true);
            });
          });
          
        }
      ));
