const express = require('express');
const app = express();

app.listen(3000, ()=>console.log("el servidor esta en funcionamiento"))

const rutasHome = require('./routes/home');

app.use('/', rutasHome);

const rutasSucursales = require('./routes/sucursales');

app.use('/sucursales', rutasSucursales);

const rutasMarcas = require('./routes/marcas');

app.use('/marcas', rutasMarcas);
