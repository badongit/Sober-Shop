const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    address: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        match: /^[0][0-9]{9}$/,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('orders', OrderSchema);
