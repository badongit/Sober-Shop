const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: [true, 'username is taken'],
        lowercase: true,
        match: [/^[a-zA-Z0-9]{8,}$/, 'username is invalid'],
    },
    password: {
        type: String,
        required: true,
    },
    fullname: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        required: true,
    },
    phoneNumber: {
        type: String,
        match: /^[0][0-9]{9}$/,
    },
    address: String,
    accountBalance: {
        type: Number,
        default: 0,
        min: 0,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('users', UserSchema);
