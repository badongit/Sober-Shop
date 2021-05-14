const express = require('express');
const verifyToken = require('../middlewares/auth');
const authController = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(verifyToken, authController.confirm)
    .patch(verifyToken, authController.updateInfor)
    
router.patch('/password', verifyToken, authController.changePassword)

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router;