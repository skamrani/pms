/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('country', {
        country_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        iso_code: {
            type: DataTypes.STRING(3),
            allowNull: false
        },
        is_active: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        }
    }, {
        tableName: 'country',
        timestamps: false
    });
};
