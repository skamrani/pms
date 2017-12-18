/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_to_team', {
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'user',
                key: 'user_id'
            }
        },
        team_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'team',
                key: 'team_id'
            }
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'user_to_team',
        timestamps: false
    });
};
