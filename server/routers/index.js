const authRouter = require('./auth');
const cartRouter = require('./cart');
const orderRouter = require('./order');
const errorHandle = require('../middlewares/errorHandle');

module.exports = (app) => {
    
    app.use('/api/auth', authRouter);

    app.use('/api/cart', cartRouter);

    app.use('/api/order', orderRouter);

    app.use(errorHandle);

};
