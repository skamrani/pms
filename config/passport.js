var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const Sequelize = require('./sequelize');
let userModel = require('../models/user.model')(Sequelize);


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, function (req, email, password, done) {
    userModel.findByEmailPassword(email, password, ['user_id', 'full_name', 'email'], (user) => {
        if (user) {
            done(null, user.get());
        } else {
            done(null, false, {message: 'User not found'});
        }
    });
}
));

passport.serializeUser(function (user, done) {
//    console.log('serialized :', user);
    done(null, user);
});

passport.deserializeUser(function (user, done) {
//    console.log('de-serialized :', user);
    done(null, user);
});

module.exports = passport;