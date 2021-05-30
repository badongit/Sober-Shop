const authRouter = require("./auth");
const productRouter = require("./product");
const categoryRouter = require("./category");
const errorHandle = require("../middlewares/errorHandle");

module.exports = (app) => {
  app.use("/api/auth", authRouter);

  app.use("/api/product", productRouter);

  app.use("/api/category", categoryRouter);

  app.use(errorHandle);
};
