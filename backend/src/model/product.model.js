const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    prodnm: { type: String, required: true },
    brandName: { type: String, required: true },
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Product = mongoose.model("prodData", productSchema);
module.exports = Product;