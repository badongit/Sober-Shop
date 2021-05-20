const jwt = require('jsonwebtoken');
const ErrorResponse = require('../helpers/ErrorResponse');
const dotenv = require('dotenv');
dotenv.config();

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    // Empty token
    if(!token) {
        return next(new ErrorResponse(401, 'Access token not found'));
    }

    // Check valid token
    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        req.userId = decode.userId;
        req.role = decode.role;

        next();
    } catch (error) {
        next(new ErrorResponse(401, 'Invalid token'));
    }
}

module.exports = verifyToken;
