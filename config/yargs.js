const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemeno por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista todas las tareas por hacer', {})
    .command('borrar', 'Borra lista tarreas por hacer', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}