/*crear el servidor
importar express
*/
//importar archivos
const express = require('express')
const routes = require('./routes')
//accede a los archivos a la raiz local
const path = require('path')
const configs = require('./config')

//verificar la conexion, authenticate devuelve una promesa
// db.authenticate()
//   .then(() => console.log("DB CONECTADO"))
//   .catch(error => console.log(error));

/*configurar express */
const app = express()
const port = 3000

//habilitar pug 
app.set('view engine', 'pug')

//añadir las vistas
app.set('views', path.join(__dirname,'./views'))

// cargar las rutas
//use porque va a reaccionar a todos los verbos de de http
//cargar una carpeta estatica
app.use('/public', express.static(path.join(__dirname, '../public')));

//validar si estamos en desarrollo o producccion
//env vamos a detectar el ambiente en donde estamos
const config = configs[app.get('env')];

//creamos la variable para el sitiio web
app.locals.titulo = config.nombreSitio;

//muestra el año actual
app.use((req, res, next) =>{
  //crear una nueva fecha
  const fecha = new Date();
  //res.local // nombre del objeto
  res.locals.fechaActual = fecha.getFullYear();
  return next();
});

app.use('/', routes());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
