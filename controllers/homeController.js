const fs = require('fs')
let dataConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));
home = {
    index : function(req, res){
                res.set({'content-type':'text/plain;charset=utf-8'});
                res.write('Bienvenidos a la red de concesionarias Don Pepe Argento' + '\n')
                res.write('Estamos orgullosos de presentarles a continuación nuestras sucursales' + '\n\n')
                dataConcesionarias.forEach((concesionarias)=>{
                    res.write('Sucursal ' + concesionarias.sucursal + '\n');
                    })
            res.end();
    }
}

module.exports = home;