const colors = require('colors');

const argv = require('./config/yargs').argv

const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            if (!tarea.completado) {
                console.log('=========Por hacer ==========='.green);
                console.log(tarea.descripcion);

                if (tarea.completado)
                    console.log('Estado :', colors.blue(tarea.completado));
                if (!tarea.completado)
                    console.log('Estado :', colors.green(tarea.completado));

                console.log('=============================='.green);
            }
        }

        break;
    case 'actualizar':
        console.log(porHacer.actualizar(argv.descripcion, argv.completado));
        break;

    case 'borrar':
        console.log(porHacer.borrar(argv.descripcion));
        break;

    default:
        console.log('Comando no es reconocido');
}