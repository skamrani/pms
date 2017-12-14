/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('rights', {
        id: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        right: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }, {
        tableName: 'rights'
    });
};
