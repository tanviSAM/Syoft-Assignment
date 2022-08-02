const express = require("express");
const router = express.Router();
const Product = require("../model/product.model");

//Create a product
router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

//to get all the products
router.get("", async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).send(products);
  } catch (err) {
    return res.status(400).send({ Message: err.message });
  }
});

//to get a single product by id

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ Message: err.message });
  }
});

//to update a product
router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ Message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findOneAndDelete(req.params.id);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(400).send({ Message: err.message });
  }
});

module.exports = router;
