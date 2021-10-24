const _ = require("lodash");
const { UserSchmaModel } = require("../models/user");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Joi = require("joi");

router.post("/", async (req, res) => {
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);

  let user = await UserSchmaModel.findOne({ email: req.body.email });
  console.log(req.body.name);
  console.log(req.body.password);
  console.log(user);
  if (!user) return res.status(400).send("Ivalid email or password");

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Ivalid email or password");

  res.send("true");
});

function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  };

  return Joi.valid(req, schema);
}

(req) => {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  };

  return Joi.valid(req, schema);
};
module.exports = router;
