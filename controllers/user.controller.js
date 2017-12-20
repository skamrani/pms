const express = require('express');
const validator = require('../middlewares/validator');
const router = express.Router();

module.exports = (Sequelize, passport, appConfig) => {

    let userModel = require('../models/user.model')(Sequelize);

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

    /**
     * @api {get} user/authenticate User:authenticate
     * @apiName user_authenticate
     * @apiGroup User
     */
    router.get("/authenticate", (req, res) => {
        if (!req.user) {
            res.sendJSON({}, 'User is not loged in', 401);
        } else {
            res.sendJSON(req.user, 'User authentication was successful');
        }
    });

    /**
     * @api {get} user/logout User:logout
     * @apiName user_logout
     * @apiGroup User
     */
    router.get("/logout", (req, res) => {
        req.logout();
        res.sendJSON({}, "User loged out");
    });

    /**
     * @api {post} user/add User:add
     * @apiName user_add
     * @apiGroup User
     * @apiParam {String} email
     * @apiParam {String} full_name
     * @apiParam {String} password
     */
    router.post("/add", (req, res) => {
        console.log('Called');
        let data = req.body;
        userModel.addUser(data, (user) => {
            if (user) {
                res.sendJSON({user_id: user.get('user_id')}, "New user added successfully");
            }
        });
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
