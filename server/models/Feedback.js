const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    comment: {
        type: String,
        default: '',
    },
    evaluation: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users',
    },
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'products',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('feedbacks', FeedbackSchema);
