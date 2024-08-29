const express = require('express');
const userController = require('../controllers/ControllerUsers');

const router = express.Router();

// 1.- Register a new user
router.post('/register', userController.registerUser);

module.exports = router;