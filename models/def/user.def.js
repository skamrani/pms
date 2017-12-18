/* jshint indent: 2 */

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
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(128),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        cell_number: {
            type: DataTypes.STRING(64),
            allowNull: true
        },
        image: {
            type: DataTypes.STRING(64),
            allowNull: true
        },
        marital_status: {
            type: DataTypes.ENUM('Single', 'Married'),
            allowNull: true
        },
        gender: {
            type: DataTypes.ENUM('male', 'female'),
            allowNull: true
        },
        address_1: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        address_2: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        date_of_birth: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        emergency_name: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        emergency_home: {
            type: DataTypes.STRING(28),
            allowNull: true
        },
        emgergency_work: {
            type: DataTypes.STRING(28),
            allowNull: true
        },
        emergency_relationship: {
            type: DataTypes.STRING(64),
            allowNull: false
        },
        emergency_cell: {
            type: DataTypes.STRING(28),
            allowNull: false
        },
        city_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'city',
                key: 'city_id'
            }
        },
        province_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'province',
                key: 'province_id'
            }
        },
        country_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            references: {
                model: 'country',
                key: 'country_id'
            }
        },
        is_active: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: '1'
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
        created_by: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        },
        updated_by: {
            type: DataTypes.INTEGER(11),
            allowNull: true
        }
    }, {
        tableName: 'user',
        timestamps: false
    });
};
