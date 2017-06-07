var Sequelize = require('sequelize');
var db = require('./index');

var User = require('./user');
var Group = require('./group');

const UserGroup = db.define('UserGroup', {
    Id: {type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true},
    UserId: {
      type: Sequelize.INTEGER,
      references: 'User',
      referencesKey: 'Id'
    },
    GroupId: {
      type: Sequelize.INTEGER,
      references: 'Group',
      referencesKey: 'Id'
    },
  },
  {
    timestamps: false,
    freezeTableName: true
  }
);

UserGroup.belongsTo (User);
UserGroup.belongsTo (Group);

module.exports = UserGroup;
