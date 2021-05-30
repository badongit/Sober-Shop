const express = require("express");
const { verifyAccessToken } = require("../middlewares/verifyToken");
const categoryController = require("../controllers/categoryController");
const permission = require("../middlewares/permission");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(categoryController.show)
  .post(verifyAccessToken, permission("admin"), categoryController.create);

router
  .route("/:id")
  .put(verifyAccessToken, permission("admin"), categoryController.update)
  .delete(verifyAccessToken, permission("admin"), categoryController.delete);

module.exports = router;
