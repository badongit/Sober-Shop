const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const authController = require('../controllers/authController');
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');

const router = express.Router();

router
    .route('/')
    .get(verifyToken, authController.confirm)
    .patch(verifyToken, authController.updateInfor)
    
router.patch('/password', verifyToken, authController.changePassword)

router.post('/register', authController.register)
router.post('/login', authController.login)
router.post('/token', verifyRefreshToken, authController.getAccessToken)

router.get('/logout', verifyToken, authController.logout)

module.exports = router;