const express = require('express');
const authMiddleware = require('../middleware/auth');

const authController = require ('../controller/auth');

const router = express.Router();


router.post('/adduser', authController.addUser);
router.post('/login',authMiddleware, authController.login);

module.exports = router;