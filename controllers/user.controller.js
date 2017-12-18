const express = require('express');
const validator = require('../middlewares/validator');
const router = express.Router();

module.exports = (Sequelize, passport, appConfig) => {

    let userModel = require('../models/user.model')(Sequelize);
//    console.log(userModel.findByEmailPassword);

    router.get('/test', (req, res) => {
        res.sendJSON({});
    });

    /**
     * @api {post} user/login User:login
     * @apiName user_login
     * @apiGroup User
     * @apiParam {String} email
     * @apiParam {String} password
     */
    router.post('/login', (req, res, next) => {
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.sendJSON({}, info.message, 401);
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                res.sendJSON(user, 'User logedin successfully')
            });
        })(req, res, next);
    });


    /**
     * @api {post} user/detail User:detail
     * @apiName user_detail
     * @apiGroup User
     * @apiParam {Number} user_id
     */
    router.post('/detail', (req, res) => {
        let body = req.body;
        userModel.findByUserId(body.user_id, ['full_name', 'email'], (user) => {
            res.sendJSON(user);
        });
    });

    router.get("/logout", (req, res) => {
        req.logout();
        res.sendJSON({}, "User loged out");
    });

//    router.get('/roles', (req, res) => {
//
//        var users = userModel.findAll();
//
//        res.send(users);
//    });
//
//    router.get('/get_all_teams', (req, res) => {
//        //console.log(usp.getAllTeams())
//        res.sendJSON(usp.getAllTeams(), "ok", 200);
//    })

    return router;
};
