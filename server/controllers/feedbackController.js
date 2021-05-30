/**
 *
 */

const Feedback = require("../models/Feedback");
const Product = require("../models/Product");
const asyncHandle = require("../middlewares/asyncHandle");

module.exports = {
  show: asyncHandle(async (req, res) => {
    const productId = req.productId;

    const feedbacks = await Feedback.find({ product: productId }).populate(
      "Product"
    );
    res.json({
      success: true,
      message: "show all product successfully",
      feedbacks,
    });
  }),

  create: asyncHandle(async (req, res) => {
    // TODO: Modify create API
    const userID = req.userID;
    const { productId, comment, evaluation } = req.body;
    const feedback = await Feedback.create({
      user: userID,
      product: productId,
      comment,
      evaluation,
    });

    res.json({
      success: true,
      message: "create feedback successfully",
      feedback,
    });
  }),

  update: asyncHandle(async (req, res) => {
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body);

    res.json({
      success: true,
      message: "update feedback successfully",
      feedback,
    });
  }),

  delete: asyncHandle(async (req, res) => {
    const feedback = await Feedback.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "delete feedback successfully",
      feedback,
    });
  }),
};
