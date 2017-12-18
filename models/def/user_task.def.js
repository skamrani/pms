/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_task', {
        user_task_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        end_time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        is_active: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
        is_deleted: {
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
        },
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'user',
                key: 'user_id'
            }
        },
        user_task_status_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        is_closed: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        }
    }, {
        tableName: 'user_task',
        timestamps: false
    });
};
