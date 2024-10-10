const express = require('express');
const { createDrone, getDrones, updateDrone, deleteDrone } = require('../controllers/droneController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

// Create a new drone
router.post('/', auth, createDrone);

// Get all drones for the authenticated user
router.get('/', auth, getDrones);

// Update an existing drone by ID
router.put('/:droneId', auth, updateDrone);

// Delete an existing drone by ID
router.delete('/:droneId', auth, deleteDrone);

module.exports = router;
