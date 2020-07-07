let fs = require('fs');
let dataConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));


sucursalesController = {
        index : function(req, res){
            res.set({'content-type':'text/plain;charset=utf-8'});
            res.write('Bienvenido estimado cliente, aquí le detallamos los datos de nuestras sucursales.' + '\n\n')
            dataConcesionarias.forEach(function(datos){
                    res.write('Sucursal ' + datos.sucursal + '.\n' + 'Dirección: ' + datos.direccion + '.\n' + 'Teléfono: ' + datos.telefono + '.\n\n');
            })
            res.end();
        },
        infoSucursal : function(req, res){
            res.set({'content-type':'text/plain;charset=utf-8'});
            let sucursalSeleccionada = req.params.sucursal;
            dataConcesionarias.forEach((sucursales)=>{
            if (sucursales.sucursal.toUpperCase() == sucursalSeleccionada.toUpperCase().trim()){
                        res.write('Estos son los datos de la sucursal: ' + sucursales.sucursal + '\n\n');
                        res.write('Dirección: ' + sucursales.direccion + '\n');
                        res.write(`Telefono: ${sucursales.telefono}  \n`);
                        res.write(`En esta sucursal contamos con: ${sucursales.autos.length} autos. \n\n`);
                        res.write('Estos son los automoviles disponibles.' + '\n\n');
                        sucursales.autos.forEach((auto)=>{
                            res.write(`Marca: ${auto.marca}.
Modelo: ${auto.modelo}.
Año: ${auto.anio}.
Color: ${auto.color}.

`);
                        })
                        res.end();
                }
            });
            res.end('Por favor seleccione una sucursal valida');
        }     
}
module.exports = sucursalesController;