const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderDetailSchema = new Schema({
    discount: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    order: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'orders',
    },
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'products',
    },
}, {
    timestamps: true,
});

mongoose.set('toJSON', { virtuals: true });

OrderDetailSchema.virtual('intoMoney').get(function() {
    return this.discount * this.amount;
})

module.exports = mongoose.model('orderDetails', OrderDetailSchema);
