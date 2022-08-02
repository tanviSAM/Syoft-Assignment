const express = require("express");
const app = express();
const connect = require("./config/db");
app.use(express.json());

const productController = require("./controllers/product.controller");
app.use("/product", productController);

const { register, login } = require("./controllers/auth.controller");
app.post("/register", register);
app.post("/login", login);

const port = 5000;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`Listening to port ${port}`);
  } catch (error) {
    console.log(error.message);
  }
});
