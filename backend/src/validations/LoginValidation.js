const joi = require('joi');

const loginValidation = joi.object({
    email:
    joi.string()
    .email()
    .required(),
  password:
      joi.string()
      .min(8)
      .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'))
      .required(), 
})

module.exports = loginValidation