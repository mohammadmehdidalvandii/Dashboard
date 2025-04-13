const joi = require("joi");

const addCustomerValidation = joi.object({
    firstName: joi.string().min(3).required(),
    lastName: joi.string().min(4).required(),
    email: joi.string().email().required(),
    phone: joi.string().pattern(new RegExp('^09\\d{9}$')).required(),
    street: joi.string().required(),
    state: joi.string().required(),
    city: joi.string().required(),
    zipCode: joi.string().required(),
    country: joi.string().required(),
    membership: joi.string().required(),
    note: joi.string().allow('').optional(),
})

module.exports = addCustomerValidation