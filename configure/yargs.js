let descripcion = {
    alias: "d",
    demand: true
}

const argv = require('yargs')
    .command("crear", "crea una nueva tarea", {
        descripcion
    })
    .command("borrar", "Elimina una tarea de la lista", {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado: {
            alias: 'c',
            default: true
        }
    }).help()
    .argv;

module.exports = {
    argv
}