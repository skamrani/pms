/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('education', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    institute_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type_of_degree: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    field_of_study: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    passing_date: {
      type: DataTypes.DATEONLY,
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
    tableName: 'education'
  });
};
