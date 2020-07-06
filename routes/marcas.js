const express = require('express');
const router = express.Router();
const rutaMarcas = require('../controllers/marcasController');

router.get('/', rutaMarcas.index)
module.exports = router;