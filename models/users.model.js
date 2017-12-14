/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    marital_status: {
      type: DataTypes.ENUM('Single','Married','Divorced','Widow'),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: 'm'
    },
    address1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(30),
      allowNull: true,
      defaultValue: 'Pakistan'
    },
    emergency_contact_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    emergency_relationship: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    emergency_home_phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    emergency_work_phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    emergency_cell_phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    team: {
      type: DataTypes.ENUM('Innovation','Activation','Calibration','Web Service','Mobile Application Development','Documentation','Quality Assurance'),
      allowNull: true
    },
    is_active: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '1'
    },
    is_deleted: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    created_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    modified_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    tableName: 'users',
      timestamps: false
  });
};
