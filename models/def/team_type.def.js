/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('team_type', {
        team_type_id: {
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
        created_by: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        updated_by: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'team_type',
        timestamps: false
    });
};
