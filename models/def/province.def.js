/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('province', {
        province_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        is_active: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
        country_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'country',
                key: 'country_id'
            }
        }
    }, {
        tableName: 'province',
        timestamps: false
    });
};
