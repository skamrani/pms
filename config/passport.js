var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
}, function (req, username, password, done) {
    console.log(req.body, username, password);
    done(null, {username: 'zubair'});
}
));

passport.serializeUser(function (user, done) {
    done(null, {name: 'zeek'});
    console.log('serialize', user);
});

passport.deserializeUser(function (id, done) {
    console.log('id deserialize ', id);
    done(null, {name: 'zeek'});
});

module.exports = passport;