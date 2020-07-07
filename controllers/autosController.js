const fs = require('fs');
let dataConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

autos={
    index : (req, res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'});
        res.write('Estimado cliente aquí esta el listado de nuestros automoviles. \n\n')
        let autos = [];
        dataConcesionarias.forEach(concesionaria=>{
           concesionaria.autos.forEach(auto=>{
               if(autos.indexOf(auto) == -1){
            autos.push(auto)
               }
           });
            });
            autos.forEach(auto=>{
                res.write(`  •  Marca: ${auto.marca} | Modelo: ${auto.modelo} | Color: ${auto.color} | Año: ${auto.anio}
`)
            })
        res.end();
    },
     marcas: (req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'});
        let autoSeleccionado = req.params.marca;
         let autos = [];
         let autoCorrecto = false;
         dataConcesionarias.forEach(concesionaria=>{
           concesionaria.autos.forEach(auto=>{
               if(autos.indexOf(auto.marca) == -1){
            autos.push(auto.marca)
               }
           });
            });
            autos.forEach(function(marca){
                if(marca.toUpperCase().indexOf(autoSeleccionado.toUpperCase().trim()) !== -1){
                    res.write('Bienvenido a continuación le detallamos los coches disponibles en base a su selección. \n\n');
                    autoCorrecto = true;
                }
            }); 
            
            dataConcesionarias.forEach(function(sucursal){
            sucursal.autos.forEach(function(auto){
                if(auto.marca.toUpperCase() == autoSeleccionado.toUpperCase().trim()){
                    res.write(` ■ Automovil: ${auto.marca} |■ Modelo: ${auto.modelo} |■ Año: ${auto.anio} |■ Color: ${auto.color}
`);                 
                }
            })
        })
        if(autoCorrecto == false){
        res.end('Por favor seleccione una marca disponible en nuestras sucursales');
        }else{
            res.end();
        }
    }
     
    }


module.exports = autos;