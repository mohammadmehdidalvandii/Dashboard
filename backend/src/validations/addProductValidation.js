const joi = require("joi");

const addProductValidation = joi.object({
    name:joi.string().required(),
    description:joi.string().required(),
    price:joi.number().required(),
    category:joi.string().required(),
    stock:joi.string().required(),
}) 


module.exports = addProductValidation;