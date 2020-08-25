const express = require('express');
const router = express.Router();

// importar el modelo 
const Viaje = require('../models/Viajes.js');
// esto siempre te retorna una promesa


module.exports = function(){
  router.get('/', (req, res) => {
    //nombre de las carpetas
    res.render('index')
  })
  
  router.get('/nosotros', (req, res) => {
    // le pasamos el pug
    res.render('nosotros', {
      pagina:'Sobre Nosotros'
    })
  })
  
  // router.get('/viajes', (req, res) => {
  //   res.render('viajes', {
  //     pagina:'Proximos viajes'
  //   })
  // })

  router.get('/viajes', (req, res) => {
    // findAll me retorna todos los resultados de la base de datos y me retorna un arreglo
    Viaje.findAll()
      .then(viajes =>  res.render('viajes', {
        pagina:'Proximos viajes',
        viajes
      }))
      .catch(error => console.log(error));
  });

  router.get('/server/models/Viajes.js/:id', (req, res) => {
    // //leer el url
    // res.send(req.params.id)
    Viaje.findByPk(req.params.id)
    //aqui se obtiene el resultado de la base de datos
    //me devuelve el objeto
      .then(viaje => res.render('viaje', {viaje}))
      .catch(error => console.log(error));
  });

   
  router.get('/testimoniales', (req, res) => {
    // le pasamos el pug
    res.render('testimoniales', {
      pagina:'Testimoniales'
    })
  })

  return router;
}



