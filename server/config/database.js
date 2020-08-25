const Sequelize = require('sequelize');

//para utilizarlo en otros archivos
module.exports = new Sequelize('agenciaViajes', 'root', 'toor', {
  host:'localhost',
  port: 3308,
  dialect: 'mysql',
  define:{
    timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  
})