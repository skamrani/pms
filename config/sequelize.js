const Sequelize = require('sequelize');
const appConfig = require('../config/app');

const sequelize = new Sequelize({
    database: 'pms',
    host: 'localhost',
    username: 'root',
    password: null,
    dialect: 'mysql',
    operatorsAliases: false
});

sequelize.loadModel = (modelName) => {
    return sequelize.import(appConfig.dirModels + '/' + modelName + '.model');
};
module.exports = sequelize;