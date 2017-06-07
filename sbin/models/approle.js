var Sequelize = require('sequelize');
var db = require('./index');

var Group = require('./group');

const AppRole = db.define('AppRole', {
    Id: {type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true},
    Name: {type: Sequelize.STRING, unique: true},
    Label: Sequelize.STRING,
    Image: Sequelize.STRING,
    GroupId: {
      type: Sequelize.INTEGER,
      references: 'Group',
      referencesKey: 'Id'
    }
  {
    timestamps: false,
    freezeTableName: true
  }
);

AppRole.belongsTo (Group);

module.exports = AppRole;
