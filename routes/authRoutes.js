const express = require('express');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

const { signup, login, getAllUsers } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.get('/users', getAllUsers);



module.exports = router;
