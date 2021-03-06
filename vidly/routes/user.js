const _ = require("lodash");
const { UserSchmaModel, validate } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleWare/auth");

router.get("/me", auth, async (req, res) => {
  const user = await UserSchmaModel.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await UserSchmaModel.findOne({ email: req.body.email });
  if (user)
    return res
      .status(400)
      .send("Sorry!, this user email is aleady registered..");

  user = new UserSchmaModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10); // can randomly generate a string to make decrypting hard
  const hashedPswrd = await bcrypt.hash(user.password, salt);
  user.password = hashedPswrd;
  //const newUser = await user.save();
  await user.save();

  const token = user.generateAuthtoken();

  res
    .header("x-auth-token", token)
    .send([user.name, user.email] + " Has been added to the database");
});

module.exports = router;
