const fs = require('fs');
const { resolveSoa } = require('dns');
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
    },
    marcas : (req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'});
        let marcaSeleccionada = req.params.marca;
         let marcasAutos = [];
        datosConcesionarias.forEach(concesionaria=>{
           concesionaria.autos.forEach(auto=>{
               if(marcasAutos.indexOf(auto.marca) == -1){
            marcasAutos.push(auto.marca)
               }
           });
            });
            marcasAutos.forEach(function(marca){
                if(marca.toUpperCase().indexOf(marcaSeleccionada.toUpperCase().trim()) !== -1){
                    res.write('Bienvenido a continuación le detallamos los coches disponibles en base a su selección. \n\n');
                }
            }); 
            
        datosConcesionarias.forEach(function(sucursal){
            sucursal.autos.forEach(function(auto){
                if(auto.marca.toUpperCase() == marcaSeleccionada.toUpperCase().trim()){
                    res.write(`Marca: ${auto.marca} Modelo: ${auto.modelo} Año: ${auto.anio} Color: ${auto.color}
`);                 
                }
            })
        })
        res.end('seleccione una marca valida');
    }
}
module.exports = marcas;