const Joi = require("joi");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema()
)({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },

  password: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 255,
  },
});

function validate() {
  const Schema = {
    name: Joi.string().min(3).required(),
  };
}

module.exports = User;
module.exports = validate;
