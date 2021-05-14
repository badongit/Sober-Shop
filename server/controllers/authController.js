const User = require('../models/User');
const argon2 = require('argon2');
const asyncHandle = require('../middlewares/asyncHandle');
const ErrorResponse = require('../helpers/ErrorResponse');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {

    // @route [POST] /api/auth/register
    // @desc User register
    // @access Public
    register: asyncHandle(async (req, res, next) => {
        const { username, password } = req.body;

        // Simple validation
        if(!username || !password) {
            return next(new ErrorResponse(400, 'Missing username and/or password'));
        }

        // Check for existing username
        const user = await User.findOne({ username });

        if(user) {
            return next(new ErrorResponse(400, 'Username is taken'));
        }

        // Everything is good
        const hashedPassword = await argon2.hash(password);

        const newUser = new User({ username, password: hashedPassword, role: 'user'});
        await newUser.save();

        const accessToken = jwt.sign({ userId: newUser._id, role: newUser.role }, process.env.TOKEN_ACCESS_SECRET);
        res.json({
            success: true,
            message: 'Account successfully created',
            accessToken,
        });
    }),

    // @route [POST] /api/auth/login
    // @desc User login
    // @access Public
    login: asyncHandle(async (req, res, next) => {
        const { username, password } = req.body;

        // Simple validation
        if(!username || !password) {
            return next(new ErrorResponse(400, 'Missing username and/or password'));
        }

        // Check for existing user 
        const user = await User.findOne({ username });

        if(!user) {
            return next(new ErrorResponse(400, 'Incorrect username or password'));
        }

        // Check password
        const passwordValid = await argon2.verify(user.password, password);

        if(!passwordValid) {
            return next(new ErrorResponse(400, 'Incorect username or password'));
        }

        // Everything is good
        const accessToken = jwt.sign({ userId: user._id, role: user.role }, process.env.TOKEN_ACCESS_SECRET);
        res.json({
            success: true,
            message: 'Logged in successfully',
            accessToken,
        });
    }),

    // @route [GET] /api/auth
    // @desc Confirm token
    // @access Public
    confirm: asyncHandle(async (req, res, next) => {
        const userId = req.userId;

        const user = await User.findOne({ _id: userId }).select('-password');

        // Check for existing user
        if(!user) {
            return next(new ErrorResponse(404, 'User not found'));
        }

        // Everything is good
        res.json({ success: true, user });
    }),

    // @route [PATCH] /api/auth
    // @desc Update user information 
    // @access Private
    updateInfor: asyncHandle(async (req, res, next) => {
        const user = await User.findByIdAndUpdate(req.userId, { ...req.body }, { new: true }).select('-password');

        // Check for existing user
        if(!user) {
            return next(new ErrorResponse(404, 'User not found'));
        } 

        // Everything is good
        res.json({ success: true, user });
    }),

    // @route [PATCH] api/auth/password
    // @desc Change password
    // @access Private
    changePassword: asyncHandle(async (req, res, next) => {
        const { password, newPassword } = req.body;

        const user = await User.findById(req.userId);

        // Check for existing user
        if(!user) {
            return next(new ErrorResponse(404, 'User not found'));
        }

        // Check password
        const passwordValid = await argon2.verify(user.password, password);

        if(!passwordValid) {
            return next(new ErrorResponse(400, 'Incorrect password'));
        }

        // Everything is good
        const hashedPassword = await argon2.hash(newPassword);
        user.password = hashedPassword;
        await user.save();
        
        res.json({ success: true, message: "Change password successfully" });
    }),
}
