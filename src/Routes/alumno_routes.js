const express = require('express')
const controller = require('../Controllers/alumno_controller')

const route = express.Router()

// Aqui debo poner todo mi CRUD de ALumnos  

route.get('/obtenerAlumnos', controller.getAlumnos)

route.post('/agregarAlumno', controller.addAlumno)

route.patch('/actualizarAlumno', controller.deleteAlumno)

route.delete('/borrarAlumno', controller.updateAlumno)

module.exports = route