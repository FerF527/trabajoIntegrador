const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosController')

router.get('/', autosController.index);
router.get('/:marca', autosController.marcas)
module.exports = router;