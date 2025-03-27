const {Sequelize} = require('sequelize')
require('dotenv').config()


const sequelize = new Sequelize(
    //Dependencias ->
    {
    dialect:process.env.PG_TYPE
  }
)
module.exports = sequelize;