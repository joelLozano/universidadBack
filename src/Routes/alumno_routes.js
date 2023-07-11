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

    const index = alumnosJson.alumnos.findIndex(alumno => alumno.boleta === req.body.boleta)
    console.log(index);

    if (index >= 0) {
        alumnosJson.alumnos[index] = req.body
        return res.json(alumnosJson)
    } else  {
       return res.json({message:"No existe el alumno"})
    }
    
})

route.delete('/borrarAlumno', (req, res) => {
    const index = alumnosJson.alumnos.findIndex(alumno => alumno.boleta === req.body.boleta)
    console.log(index);

    if (index >= 0) {
        alumnosJson.alumnos.splice(index, 1)
        return res.json(alumnosJson)
    } else  {
       return res.json({message:"No existe el alumno"})
    }
})

module.exports = route