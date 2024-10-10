const express = require('express');
const { getFlightLog } = require('../controllers/flightController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:flightId', auth, getFlightLog);

module.exports = router;
