const express = require('express')

const route = express.Router()
const alumnosJson = require('../Models/alumnos.json')

// Aqui debo poner todo mi CRUD de ALumnos  

route.get('/obtenerAlumnos', (req, res) => { // ENDPOINT
    res.json(alumnosJson)
})

route.post('/agregarAlumno', (req, res) => {
    alumnosJson.alumnos.push(req.body)
    res.json(alumnosJson)
})

route.patch('/actualizarAlumno', (req, res) => {
    res.json({message:"Aqui estan tooos los alumos"})
})

route.delete('/borrarAlumno', (req, res) => {
    res.json({message:"Aqui estan tooos los alumos"})
})

module.exports = route