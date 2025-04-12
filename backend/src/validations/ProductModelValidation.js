const joi = require("joi");

const productModelValidation = joi.object({
    name:joi.string().required(),
    description:joi.string().required(),
    price:joi.number().required(),
    image:joi.string().required(),
    category:joi.string().required(),
    stock:joi.string().required(),
    sku:joi.string().required(),
    status:joi.boolean().required(),
    createdAt:joi.date().required(),
    updatedAt:joi.date().required()
}) 


module.exports = productModelValidation;