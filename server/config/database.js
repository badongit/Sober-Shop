const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });

        console.log('Connected DB success');
    } catch (error) {
        console.log('Connect DB failed : ', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;