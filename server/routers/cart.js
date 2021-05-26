const express = require('express');
const cartController = require('../controllers/cartController');
const permission = require('../middlewares/permission');
const { verifyAccessToken } = require('../middlewares/verifyToken');
const router = express.Router();

router.post('/', verifyAccessToken, permission('user'), cartController.add);

router.get('/', verifyAccessToken, permission('user'), cartController.getAll);

router.patch('/', verifyAccessToken, permission('user'), cartController.update);

router.delete('/:productId', verifyAccessToken, permission('user'), cartController.delete);

module.exports = router;
