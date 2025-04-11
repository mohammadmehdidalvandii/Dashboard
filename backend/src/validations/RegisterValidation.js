const joi = require("joi");

const registerValidation = joi.object({
    username:
    joi.string()
    .min(5)
    .required(),
    email:
    joi.string()
    .email()
    .required(),
    phone:
    joi.string()
    .pattern(new RegExp('^09\\d{9}$'))
    .required(),
    password:
    joi.string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$'))
    .required(), 
})

module.exports = registerValidation