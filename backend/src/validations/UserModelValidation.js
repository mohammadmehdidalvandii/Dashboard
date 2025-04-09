const joi = require("joi");

const userModelValidation = joi.object({
    firstName: joi.string()
        .min(3)
        .default("admin"),
    lastName: joi.string()
        .min(10)
        .default("admin"),
    username: joi.string()
        .min(5)
        .required()
        .default('ADMIN ADMIN'),
    image: joi.string()
        .default("/images/default-image.png"),
    email: joi.string()
        .email()
        .required(),
    phone: joi.string()
        .pattern(new RegExp('^09\\d{9}$'))
        .required(),
    role: joi.string()
        .default("ADMIN"),
    password: joi.string()
        .min(8)
        .required()
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')),
    refreshToken: joi.string(),
    createdAt: joi.date()
        .default(Date.now),
    updatedAt: joi.date()
        .default(Date.now)
})

module.exports = userModelValidation