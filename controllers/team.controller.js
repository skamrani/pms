const express = require('express');
const validator = require('../middlewares/validator');
const router = express.Router();

module.exports = (Sequelize, passport, appConfig) => {

    let teamModel = require('../models/team.model')(Sequelize);

    /**
     * @api {GET} team/types Team:types
     * @apiName team_types
     * @apiGroup Team
     */
    router.get('/types', (req, res) => {
        teamModel.getTypes((team_types) => {
            res.sendJSON(team_types);
        });
    });

    return router;
};
