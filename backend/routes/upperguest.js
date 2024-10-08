const express = require('express');
const router = express.Router();
const upperguestController = require('../controllers/upperguestController');

router.get('/', upperguestController.getUpperguests);
router.post('/', upperguestController.createUpperguest);

module.exports = router;
