const express = require('express');
const router = express.Router();
module.exports = (Sequelize, passport, appConfig) => {

    let userModel = Sequelize.loadModel('user');
    router.post('/login', (req, res) => {
        console.log(req.body);
        res.send('user has lodged in ');
    });

    router.post('/register', (req, res) => {
            console.log(req.body);
            res.send('post register');
    });

//    router.post('/login', passport.authenticate('local'), (req, res) => {
//        res.send('user has lodged in ');
//    });

    return router;
};
