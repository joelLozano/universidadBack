const express = require('express')  // "invocar" -> indica que utiizara Express ( o requiere)
const alumnosRoutes = require('./src/Routes/alumno_routes.js') // importar las rutas de alumnos
const profesorRoutes = require('./src/Routes/profesor_routes.js') // importar las rutas de profesores
const bodyParser = require('body-parser')
const app = express() // crea una instancia de express

app.use(bodyParser.urlencoded({ extended: false }))  // dependencias / configuraciones para leer
app.use(bodyParser.json())     // archivos tipo Json

// rutas del alumno
app.use(alumnosRoutes)
app.use(profesorRoutes)


app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000 🚀')
} )