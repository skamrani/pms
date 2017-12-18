/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_task_log', {
        user_task_log_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_task_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'user_task',
                key: 'user_task_id'
            }
        },
        user_task_status_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'user_task_status',
                key: 'user_task_status_id'
            }
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        created_by: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'user_task_log',
        timestamps: false
    });
};
