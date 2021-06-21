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
    const conditions = {};

    /*== Find if category_id is not empty ==*/
    if (req.query.category_id) {
      conditions.category = req.query.category_id;
    }

    /*== Find if name is not empty with regex ==*/
    if (req.query.name) {
      conditions.name = new RegExp(req.query.name, "ig");
    }

    /*== Find with price between min_price and max_price ==*/
    if (req.query.min_price) {
      if (!conditions.price) {
        conditions.price = {};
      }

      conditions.price.$gte = req.query.min_price;
    }

    if (req.query.max_price) {
      if (!conditions.price) {
        conditions.price = {};
      }

      conditions.price.$lte = req.query.max_price;
    }

    const products = await Product.find(conditions);

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

  // Tý thêm xong xóa api này đi nhé
  test: asyncHandle(async (req, res) => {
    const product = await Product.insertMany([
      {
        name: "Boxy Runway T-Shirt",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-4.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-4.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-4.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-4.jpg",
        ],
        price: 210,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 3,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Classic Topper",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-6.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-6.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-6.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-6.jpg",
        ],
        price: 490,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 5,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Cotton Jacket",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-8.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-8.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-3.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-8.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-8.jpg",
        ],
        price: 100,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 0,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Cotton Poplin Dress",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-9.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-9.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-9.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-9.jpg",
        ],
        price: 155,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 0,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Crewneck Blouse",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-4.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1.jpg",
        ],
        price: 215,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 0,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Denim Dress",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-12.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-5.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-12.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-12.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-5.jpg",
        ],
        price: 90,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 3,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Flared Skirts",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-2.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-2.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-2.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-2.jpg",
        ],
        price: 90,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 5,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Light Felt Coat",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-6.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3_1-3.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-6.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-6.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3_1-3.jpg",
        ],
        price: 430,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 4,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Medium Sleeve Dress",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-22.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-22.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-22.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-22.jpg",
        ],
        price: 140,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 4,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Over-Sized Pants",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-25.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-25.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-25.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-25.jpg",
        ],
        price: 105,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 2,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Runway Pants",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-28.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-28.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/3-18.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-28.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-28.jpg",
        ],
        price: 40,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 2,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Sleeveless Dress",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-8.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-8.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1_1-8.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2_1-8.jpg",
        ],
        price: 160,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 3,
        category: "60afea098841df28fc60331b",
      },
      {
        name: "Stripe Sweater",
        thumb: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-33.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-33.jpg",
        ],
        listImage: [
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-33.jpg",
          "https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/2-33.jpg",
        ],
        price: 200,
        discount: 0,
        evaluation: 0,
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        sold: 3,
        category: "60afea098841df28fc60331b",
      },
    ]);

    return sendResponse(res, "Store successfully.", product);
  }),
};
