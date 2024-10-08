const express = require('express');
const router = express.Router();
const escalasController = require('../controllers/escalasController');

router.get('/', escalasController.getEscalas);
router.post('/', escalasController.createEscala);

module.exports = router;
