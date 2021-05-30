const ErrorResponse = require('../helpers/ErrorResponse');
const asyncHandle = require('../middlewares/asyncHandle');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

module.exports = {
    
    // @route [POST] /api/cart
    // @desc Add product to user's cart
    // @access only role user
    add: asyncHandle(async (req, res, next) => {
        const userId = req.userId;
        const { productId, quantity } = req.body;

        // Simple validation
        if(!(productId && quantity)) {
            return next(new ErrorResponse(400, 'Lack of information'));
        }

        // Check for existing product
        const product = await Product.findOne({ _id: productId });

        if(!product) {
            return next(new ErrorResponse(404, 'Not found product'));
        }

        // Check for existing product in cart
        const cart = await Cart.findOne({ user: userId, product: productId });

        if(cart) {
            cart.quantity += quantity;
            await cart.save();

            res.json({ success: true, message: 'The product has been added to cart', cart });
        } else {
            const newCart = await Cart.create({
                user: userId,
                product: productId,
                quantity,
            });

            res.json({ success: true, message: 'The product has been added to cart', cart: newCart });
        }

    }),

    // @route [GET] /api/cart
    // @desc Get all products in user's cart
    // @access Only role user
    getAll: asyncHandle(async (req, res, next) => {
        const userId = req.userId;

        const carts = await Cart.find({ user: userId }).populate('product');

        res.json({ success: true, carts });
    }),

    // @route [DELETE] /api/cart/:productId
    // @desc Delete product in user's cart
    // @access Only role user
    delete: asyncHandle(async (req, res, next) => {
        const userId = req.userId;
        const productId = req.params.productId;

        const deletedCart = await Cart.findOneAndDelete({ user: userId, product: productId});

        // Check for existing product in user's cart
        if(!deletedCart) {
            return next(new ErrorResponse(404, "Not found product in user's cart"));
        }

        res.json({ success: true, message: 'The product has been deleted by user', cart: deletedCart });
    }),

    // @route [PATCH] /api/cart
    // @@desc Update quantity for product in user's cart
    // @access Only role user
    update: asyncHandle(async (req, res, next) => {
        const userId = req.userId;
        const { productId, quantity } = req.body;

        // Simple validation
        if(!(productId && quantity)) {
            return next(new ErrorResponse(400, 'Lack of information'));
        }

        const updatedCart = await Cart.findOneAndUpdate({ user: userId, product: productId }, { quantity }, { new: true }).populate('product');

        // Check for existing product in user's cart
        if(!updatedCart) {
            return next(new ErrorResponse(404, "Not found product in user's cart"));
        };

        res.json({ success: true, message: "The product has been updated", cart: updatedCart });
    }),

};