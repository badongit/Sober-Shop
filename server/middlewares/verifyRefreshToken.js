require('dotenv').config();
const redisClient = require('../config/redis');
const ErrorResponse = require('../helpers/ErrorResponse');
const jwt = require('jsonwebtoken');

const verifyRefreshToken = async (req, res, next) => {
    const { refreshToken } = req.body;

    // Check empty refresh token
    if(!refreshToken) {
        return next(new ErrorResponse(401, 'Refresh token not found'));
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        redisClient.get(decoded.userId.toString(), function(error, redisRefreshToken) {
            if(error) 
               throw error;

            // Check token stored in redis
            if(!redisRefreshToken) {
                return next(new ErrorResponse(401, 'Refresh token not stored'));
            }

            if(refreshToken !== redisRefreshToken) {
                return next(new ErrorResponse(401, 'Refresh token not match token stored'));
            }

             // Everything is good
            req.userId = decoded.userId;

            next();
        });
       
    } catch (error) {
        return next(new ErrorResponse(401, 'Invalid token'));
    }
};

module.exports = verifyRefreshToken;