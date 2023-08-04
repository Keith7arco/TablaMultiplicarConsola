
const {crearArchivo}=require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));






//console.log(argv);
//const base=2;

//CON SPLIT SEPARO BASE Y VALOR. OPCION BRUTA
// const [ , , arg3 = 'base=5']=process.argv;
// const [, base = 5] = arg3.split('=');


//Diferencia esta en que si sale un error, se debe atrapar con try/catch
// fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
//     if(err) throw err;
//     console.log(`Archivo tabla del ${base} creado`);
// })




