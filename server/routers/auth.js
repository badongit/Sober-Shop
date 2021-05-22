const express = require('express');
const { verifyAccessToken, verifyRefreshToken, verifyResetToken }= require('../middlewares/verifyToken');
const authController = require('../controllers/authController');

const router = express.Router();

router
    .route('/')
    .get(verifyAccessToken, authController.confirm)
    .patch(verifyAccessToken, authController.updateInfor)
    
router.patch('/password', verifyAccessToken, authController.changePassword)
router.post('/forget-password', authController.forgetPassword)
router.patch('/reset-password/:resetToken', verifyResetToken, authController.resetPassword)

router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/token', verifyRefreshToken, authController.getAccessToken)
router.get('/logout', verifyAccessToken, authController.logout)

module.exports = router;