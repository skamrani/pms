var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const Sequelize = require('./sequelize');
let userModel = Sequelize.loadModel('users');


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
}, function (req, username, password, done) {
    userModel.findOne({where: {email: username, password: password}}).then(user => {
        if (user) {
            done(null, user.get());
        } else {
            done(null, false, {message: 'User not found'});
        }
    }).catch((err) => {
        done(err, false);
    });
}
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

module.exports = passport;