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
 * @license Copyright (c) 2021 Huu Ngoc Developer
 */

const Product = require("../models/Product");
const asyncHandle = require("../middlewares/asyncHandle");

module.exports = {
  index: asyncHandle(async (req, res, next) => {
    const products = await Product.find();
    res.json({
      success: true,
      message: "Get list successfully.",
      products,
    });
  }),

  show: asyncHandle(async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json({
      success: true,
      message: "Show successfully.",
      product,
    });
  }),

  create: asyncHandle(async (req, res) => {
    console.log(req.body);
    const product = await Product.create(req.body);

    res.json({
      success: true,
      message: "Create successfully.",
      product,
    });
  }),

  update: asyncHandle(async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      success: true,
      message: "Update successfully.",
      product,
    });
  }),

  delete: asyncHandle(async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "Delete successfully.",
      product,
    });
  }),
};
