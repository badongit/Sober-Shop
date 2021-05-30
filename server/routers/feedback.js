const express = require("express");
const { verifyAccessToken } = require("../middlewares/verifyToken");
const feedbackController = require("../controllers/feedbackController");
const permission = require("../middlewares/permission");
const { route } = require("./category");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(feedbackController.show)
  .post(verifyAccessToken, permission("user"), feedbackController.create);

router
  .route("/:id")
  .put(verifyAccessToken, permission("user"), feedbackController.update)
  .delete(verifyAccessToken, permission("user"), feedbackController.delete);

module.exports = router;
