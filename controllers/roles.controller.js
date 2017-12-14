const express = require('express');
const router = express.Router();

module.exports = (Sequelize, passport, appConfig) => {

    let rolesModel = Sequelize.loadModel('roles');

    router.get('/', (req, res) => {
        var r;
        var roles = rolesModel.findAll({raw: true}).then(rolez => {
            r = rolez;
            res.sendJSON(r, 'ok', 200)
        });

    });
    return router;
};
