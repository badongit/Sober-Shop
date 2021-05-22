require('dotenv').config();
const redisClient = require('../config/redis');
const jwt = require('jsonwebtoken');

const generateRefreshToken = (userId) => {
    const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRE});

    redisClient.set(userId.toString(), refreshToken, function(error) {
        if(error) throw error;

        console.log('Stored refresh token');
    });

    return refreshToken;
}

module.exports = generateRefreshToken;