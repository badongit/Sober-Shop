const ErrorResponse = require('../helpers/ErrorResponse');
const asyncHandle = require('../middlewares/asyncHandle');
const Order = require('../models/Order');
const OrderDetail = require('../models/OrderDetail');
const User = require('../models/User');
const Cart = require('../models/Cart');
const mongoose = require('mongoose');
const Product = require('../models/Product');

module.exports = {

    // @route [POST] /api/order
    // @desc Add order and order detail
    // @access Only role user
    addOrder: asyncHandle(async (req, res, next) => {
        const userId = req.userId;
        const { address, phoneNumber, totalAmount, carts } = req.body;

        // Simple validation
        if(!(address && phoneNumber && totalAmount && carts)) {
            return next(new ErrorResponse(400, 'Lack of information'));
        }

        // Create session
        const session = await mongoose.startSession();
        session.startTransaction();
        
        try {
            const options = { session };

            // Check user's account balance 
            const user = await User.findOne({ _id: userId }, null, options);

            if(!user) {
                await session.abortTransaction();
                session.endSession();

                return next(new ErrorResponse(404, 'User not found'));
            }

            if(user.accountBalance < totalAmount) {
                await session.abortTransaction();
                session.endSession();

                return next(new ErrorResponse(400, "User's account balance is not enough for payment"));
            }

            // Check for existing product in user's cart and delete them
            const productsInCart = await Promise.all(carts.map(async cartId => {
                const cart = await Cart.findByIdAndDelete(cartId, options).populate('product');

                const product = await Product.findById(cart.product._id, null, options);
                product.sold += cart.quantity;
                await product.save();

                return cart;
            }));

            const order = await Order.create([{
                user: userId,
                address,
                phoneNumber,
                totalAmount,
            }], options);

            const newOrder = order[0];
            
            user.accountBalance -= totalAmount;
            await user.save();

            // Transfer money to recipient's account
            const receiver = await User.findOne({ username: 'badong2001'}, null, options);
            
            if(!receiver) {
                await session.abortTransaction();
                session.endSession();

                return next(new ErrorResponse(404, 'Receiver not found'));
            }

            receiver.accountBalance += totalAmount;
            await receiver.save();

            // Create array detail of order
            const orderDetailArray = productsInCart.map(cart => {
                
                return {
                    order: newOrder._id,
                    product: cart.product._id,
                    quantity: cart.quantity,
                    discount: cart.product.discount,
                    price: cart.product.price,
                };
            });

            const orderDetails = await OrderDetail.insertMany(orderDetailArray, options);
            
            // End session
            await session.commitTransaction();
            session.endSession();

            res.json({ success: true, message: 'Add order successfully', order: newOrder, orderDetails });
        } catch (error) {
            await session.abortTransaction();
            session.endSession();

            return next(new ErrorResponse(400, error.message));
        }
    }),

    // @route [GET] /api/order/user
    // @desc Get all order of user
    // @access Only role user
    getOrderUser: asyncHandle(async (req, res, next) => {
        const userId = req.userId;

        const orders = await Order.find({ user: userId }).populate({ path: 'orderDetails', populate: 'product'});

        res.json({ success: true, orders });
    }),

    // @route [GET] /api/order/admin
    // @desc Get all order in database
    // @access Only role admin
    getAllOrders: asyncHandle(async (req, res, next) => {
        const orders = await Order.find({}).populate({ path: 'orderDetails', populate: 'product' });

        res.json({ success: true, orders });
    }),
};
