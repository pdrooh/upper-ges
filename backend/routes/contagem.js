const express = require('express');
const router = express.Router();
const contagemController = require('../controllers/contagemController');

router.get('/', contagemController.getContagem);
router.put('/', contagemController.updateContagem);

module.exports = router;
