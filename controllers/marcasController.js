const fs = require('fs');
const datosConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const marcas={
    index: (req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'});
        res.write('Has ingresado a la seccion de marcas. \n\nA continuación te detallamos todas las marcas de nuestros coches disponibles: \n\n')
        let marcasAutos = [];
        datosConcesionarias.forEach(concesionaria=>{
           concesionaria.autos.forEach(auto=>{
               if(marcasAutos.indexOf(auto.marca) == -1){
            marcasAutos.push(auto.marca)
               }
           });
            });
            marcasAutos.forEach(marca=>{
                res.write('  - ' + marca + '\n')
            })
        res.end();
    }
    
}
module.exports = marcas;