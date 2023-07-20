const alumnosJson = require('../Models/alumnos.json')

const getAlumnos = (req, res) => {
    res.json(alumnosJson)
}

const addAlumno = (req, res) => {
    // desestructuración
    let materias = []

    const {boleta, name,  email, materia, calificacion, profesor, horario} = req.body 

    let materiaObj = {materia,calificacion,profesor,horario}
    materias.push(materiaObj)
    boleta = parseInt(boleta)
    let alumno = {name, boleta, email, materias}

    console.log(alumno);

    alumnosJson.alumnos.push(alumno)
    res.json(alumnosJson)
}

const deleteAlumno =  (req, res) => {

    const index = alumnosJson.alumnos.findIndex(alumno => alumno.boleta === req.body.boleta)
    console.log(index);

    if (index >= 0) {
        alumnosJson.alumnos[index] = req.body
        return res.json(alumnosJson)
    } else  {
       return res.json({message:"No existe el alumno"})
    }
}

function updateAlumno (req, res) {
    const index = alumnosJson.alumnos.findIndex(alumno => alumno.boleta === req.body.boleta)
    console.log(index);

    if (index >= 0) {
        alumnosJson.alumnos.splice(index, 1)
        return res.json(alumnosJson)
    } else  {
       return res.json({message:"No existe el alumno"})
    }
}

module.exports = {getAlumnos, addAlumno, deleteAlumno, updateAlumno}
