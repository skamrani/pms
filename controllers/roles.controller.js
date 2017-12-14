
const express = require('express');
const router = express.Router();
//const roles = require('../models/roles.model');
//const role_rights = require('../models/role_rights.model');

module.exports = (Sequelize, passport, appConfig) => {
    console.log('in roles controller')
    let rights = Sequelize.loadModel('rights');
    let rolesRightsModel = Sequelize.loadModel('role_rights');

    router.get('/', (req, res) => {
        var r;
        var roles = rolesModel.findAll({raw: true}).then(rolez => {
            r = rolez;
            res.sendJSON(r, 'ok', 200)
        });

    });

    router.get('/rights/:id', (req, res) => {
        role_id = req.params.id;
        rolesRightsModel.findAll({'where' : {'role_id' : role_id}, raw:true}).then(roles => {
            console.log(roles)
            var right_ids = [];
            for(index in roles)
            {
                //console.log(roles[index].id)
                right_ids.push(roles[index].right_id)
            }
            rights.findAll({'where' : {'id' : right_ids}},{raw:true}).then(rights => {
                res.sendJSON(rights, 'ok', 200)
            });


        });

    });
    return router;
};

