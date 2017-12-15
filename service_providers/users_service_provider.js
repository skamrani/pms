/* jshint indent: 2 */
const Sequelize = require('../config/sequelize');
var userModel = Sequelize.loadModel('users');

userModel.getAllTeams = function () {


    return userModel.rawAttributes.team.values;
    /*
     Sequelize.query("SHOW COLUMNS FROM users LIKE 'team'", { type: Sequelize.QueryTypes.SELECT }).then(values => {
     return response;
     })
     */

}

userModel.xyz = function () {
    console.log('xyz');
}
module.exports = userModel