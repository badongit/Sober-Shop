/**
 * @package Controllers
 * @category productController
 *
 * @api index() Get all products
 * @api show() Show product by id
 * @api create() Create a product
 * @api update() Update a product
 * @api delete() Delete a product
 *
 * @author Huu Ngoc Developer huungoc1994hd@gmail.com
 * @date 25/05/2021
 */

const Product = require("../models/Product");
const asyncHandle = require("../middlewares/asyncHandle");
const sendResponse = require("../helpers/SendResponse");

module.exports = {
  index: asyncHandle(async (req, res) => {
    const products = await Product.find();

    return sendResponse(res, "Get list successfully.", products);
  }),

  show: asyncHandle(async (req, res) => {
    const product = await Product.findById(req.params.id);

    return sendResponse(res, "Show successfully.", product);
  }),

  create: asyncHandle(async (req, res) => {
    const product = await Product.create(req.body);

    return sendResponse(res, "Create successfully.", product);
  }),

  update: asyncHandle(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);

    return sendResponse(res, "Update successfully.", product);
  }),

  delete: asyncHandle(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);

    return sendResponse(res, "Delete successfully.", product);
  }),
};
