var Sequelize = require('sequelize');
const db = new Sequelize('cafeteria', 'cafeteria', 'cafeteria123456789',
{
    host: '127.0.0.1',
    dialect: 'sqlite',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    storage: './sbin/models/cafeteria.sqlite'
})

db.authenticate()
.then(() => {
  console.log ('Connection is established successfully.');
})
.catch(err => {
  console.error ('Unable to connect to the database.', err);
});

module.exports = db;
