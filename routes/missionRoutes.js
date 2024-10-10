const express = require('express');
const { createMission, startMission, stopMission } = require('../controllers/missionController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', auth, createMission);
router.post('/start', auth, startMission);
router.post('/stop', auth, stopMission);

module.exports = router;
