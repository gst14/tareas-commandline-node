const fs = require('fs');

let listaTODO = [];


const guardarDB = () => {
    let data = JSON.stringify(listaTODO);
    fs.writeFile('./DB/data.json', data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar: ', err);
        }
    });
}

const leerDB = () => {
    try {
        listaTODO = require('../DB/data.json');
    } catch (error) {
        listaTODO = [];
    }
}


const getListado = () => {
    leerDB();
    return listaTODO
};

const actualizar = (descripcion, completado = true) => {
    let retorno = false;
    leerDB();
    let indice = listaTODO.findIndex(tarea => tarea.descripcion === descripcion);
    if (indice >= 0) {
        listaTODO[indice].completado = completado;
        guardarDB();
        retorno = true;
    }
    return retorno;
}

const borrar = (descripcion) => {
    leerDB();
    let indice = listaTODO.findIndex(tarea => tarea.descripcion === descripcion);
    if (indice >= 0) {
        let tarea = listaTODO.splice(indice, 1);
        guardarDB();
        return tarea;
    }
    return indice;
}

const crear = (descripcion) => {
    leerDB();
    let todo = {
        descripcion,
        completado: false
    };

    listaTODO.push(todo);
    guardarDB();
    return todo;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}