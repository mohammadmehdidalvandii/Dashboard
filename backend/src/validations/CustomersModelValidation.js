const joi = require('joi');

const customersModelValidation = joi.object({
    firstName: joi.string().min(3).required(),
    lastName: joi.string().min(4).required(),
    name:joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().pattern(new RegExp('^09\\d{9}$')).required(),
    address: joi.string().required(),
    membership: joi.string().required(),
    note: joi.string().allow('').optional(),
});

module.exports = customersModelValidation;