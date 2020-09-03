const { argv } = require('./configure/yargs');
const { colors } = require('colors');
const { crear, getListado, actualizar, borrar } = require('./listado-todo/listado.js');

comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado();
        for (const tarea of listado) {
            console.log("===========TO-DO=========".green);
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado ? "Completado" : "No completado");
            console.log("=========================".green);
        }

        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado ? "Tarea actualizada" : "No existe una tarea con esa descripcion");
        break;
    case 'borrar':
        let tareaEliminada = borrar(argv.descripcion);
        console.log(tareaEliminada != -1 ? `La tarea [${tareaEliminada[0].descripcion}] fue eliminada` : "No existe una tarea con esa descripcion");
        break;
    default:
        console.log("Comando no reconocido");
        break;
}