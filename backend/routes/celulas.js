const express = require('express');
const router = express.Router();
const celulasController = require('../controllers/celulasController');

router.get('/', celulasController.getCelulas);
router.post('/', celulasController.createCelula);

module.exports = router;
