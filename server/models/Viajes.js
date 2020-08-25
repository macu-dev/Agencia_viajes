// importar sequelize
const Sequelize = require('sequelize');

//exportar mi base de datos
const db = require('../config/database');

//definir el modelo
                        //nombre del modelo

const Viaje = db.define('viaje', {
  titulo:{
    type: Sequelize.STRING
  },
  precio:{
    type: Sequelize.STRING
  },
  fecha_ida:{
    type: Sequelize.DATE
  },
  fecha_vuelta:{
    type: Sequelize.DATE
  },
  imagen:{
    type: Sequelize.STRING
  },
  descripcion:{
    type: Sequelize.STRING
  },
  disponible:{
    type: Sequelize.STRING
  }

})

//exportamos nuestro modelo
module.exports = Viaje ;