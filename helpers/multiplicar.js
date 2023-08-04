const fs=require('fs');
var colors = require('colors');

const crearArchivo = async(base = 1,listar = false,hasta=10) =>{
    try {
        let salida='';
        let consola='';
        for(let i=1;i<=hasta;i++){
            salida+=`${base} x ${i} = ${base * i}\n`;
            consola+=`${base} x ${i} = ${base * i}\n`.bold.brightGreen;
        }
            
        if(listar){
            console.log('====================='.rainbow);
            console.log(`    Tabla del: ${base} `.trap.white);
            console.log('====================='.rainbow);
            console.log(consola);
        }
            
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
        return`Tabla del ${base}.txt`.rainbow;
    
    } catch (error) {
        throw error;
    }
    
}

module.exports={
    //REDUNDANCIA
    //crearArchivo: crearArchivo
    crearArchivo
}