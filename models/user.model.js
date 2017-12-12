
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        user_id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        full_name: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(128),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(256),
            allowNull: false
        },
        salt: {
            type: DataTypes.STRING(9),
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(64),
            allowNull: true
        },
        is_active: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: '1'
        },
        date_added: {
            type: DataTypes.DATE,
            allowNull: true
        },
        date_modified: {
            type: DataTypes.DATE,
            allowNull: true
        },
        created_by: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        modified_by: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        }
    }, {
        tableName: 'user',
        timestamps: false
    });
};
