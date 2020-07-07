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
    }


module.exports = autos;