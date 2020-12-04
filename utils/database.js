const Sequelize = require('sequelize')
const keys = require('../keys');

const sequelize = new Sequelize(keys.CLEARDB_DATABASE_URL, {
    dialect: 'mysql',
    logging:  true //false
})
module.exports = sequelize
