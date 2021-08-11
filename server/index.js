if (process.env.NODE_ENV === "development") {
  require("dotenv").config({
    path: "./config/dev.env",
  });
}

const express = require("express");
const router = require("./routers");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Connect to mongodb
require("./config/database")();

const PORT = process.env.PORT || 5000;

router(app);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
