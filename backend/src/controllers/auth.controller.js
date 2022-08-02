const express = require("express");
// const router = express.Router;
require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");

const newToken = (user) => {
  return jwt.sign({ user }, process.env.jwtSecretKey);
};

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = newToken(user);

    return res.status(201).send({ user, token });
  } catch (err) {
    console.log(err.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(400)
        .send({ message: "Incorrect Email Id. Please try again." });
    }
    const password = user.checkPassword(req.body.password);
    if (!password) {
      return res
        .status(400)
        .send({ message: "Incorrect password. Please try again." });
    }
    const token = newToken(user);
    res.send({ user, token });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { register, login };
