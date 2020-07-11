const fs = require('fs');


let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }


}

const crear = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion && tarea.completado === false);
    if (index >= 0) {
        return "Registro existe y esta pendiente"
    } else {
        let porHacer = {
            descripcion,
            completado: false
        };

        listadoPorHacer.push(porHacer);

        guardarDB();

        return "Registro Guardado";
    }
}

let getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion && tarea.completado === false);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let tareaB = listadoPorHacer.find(tarea => tarea.descripcion === descripcion && tarea.completado === false)
    if (tareaB) {
        let nuevaLista = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
        if (listadoPorHacer.length === nuevaLista.length) {
            return false;
        } else {
            listadoPorHacer = nuevaLista;
            guardarDB();
            return true;
        }
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}