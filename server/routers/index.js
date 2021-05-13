const authRouter = require('./auth');
const errorHandle = require('../middlewares/errorHandle');

module.exports = (app) => {
    
    app.use('/api/auth', authRouter);

    app.use(errorHandle);

};
