const express = require('express');
const router = express.Router();
const roles = require('../models/roles.model');

module.exports = (Sequelize, passport, appConfig) => {
    console.log('in roles controller')
    let rolesModel = Sequelize.loadModel('roles');





    router.get('/', (req, res) => {
        var r;
        var roles = rolesModel.findAll({raw:true}).then(rolez => { r=rolez; res.sendJSON(r, 'ok', 200)});


    });
    return router;
};
