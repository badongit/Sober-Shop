/**
 * @api show() get all category
 * @api create() cretae a new category
 * @api update() update a category
 * @api delete() deletea category
 */

const Category = require("../models/Category");
const asyncHandle = require("../middlewares/asyncHandle");

module.exports = {
  show: asyncHandle(async (req, res) => {
    const category = await Category.find();

    res.json = {
      success: true,
      message: "get list category successfully",
      category,
    };
  }),
  create: asyncHandle(async (req, res) => {
    const category = await Category.create(req.body);

    res.json({
      success: true,
      message: "create category successfully",
      category,
    });
  }),
  update: asyncHandle(async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, red.body);

    res.json({
      success: true,
      message: "update category successfully",
      category,
    });
  }),
  delete: asyncHandle(async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "delete catefory successfully",
      category,
    });
  }),
};
