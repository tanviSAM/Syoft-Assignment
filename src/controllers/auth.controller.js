const express = require("express");
const router = express.Router;
const User = require("../model/user.model");

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (err) {
    console.log(err.message);
  }
};

const login = async (req,res)=>{
try{
    const user = await User.findOne({email:req.body.email});
    if(!user){
        return res.status(400).send('Incorrect Email Id. Please try again.')
    }
    const password = User.checkPassword(req.body.password);
    if(!password){
        return res.status(400).send('Incorrect password. Please try again.')
    }
    res.send(user);
} catch (err) {
    console.log(err.message);
  }
}

module.exports= {register, login}