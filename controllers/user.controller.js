const express = require('express');
const router = express.Router();
const users = require('../models/users.model');

module.exports = (Sequelize, passport, appConfig) => {
    console.log('in user controller')
    let userModel = Sequelize.loadModel('users');

    router.post('/login', (req, res, next) => {
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                res.sendJSON({}, info.message, 401);
            }
            req.logIn(user, function (err) {
                if (err) {
                    res.sendJSON({error: err}, 'Exception', 500);
                }
                res.sendJSON(user, 'User logedin successfully')
            });
        })(req, res, next);
    });

    router.get("/logout", (req, res) => {
        req.logout();
        res.sendJSON({}, "User loged out");
    });


    router.post('/register', (req, res) => {
        console.log(req.body);
        res.send('post register');
    });

//    router.post('/login', passport.authenticate('local'), (req, res) => {
//        res.send('user has lodged in ');
//    });

    router.get('/roles', (req, res) => {

        var users = userModel.findAll();

        res.send(users);
    });
    return router;
};
