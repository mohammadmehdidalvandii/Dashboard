const Joi = require("joi");

const ordersModelValidation = Joi.object({
    customerID: Joi.string().required(),
    items: Joi.array().items(
        Joi.object({
            productID: Joi.string().required(),
            quantity: Joi.string().required(),
            price: Joi.string().required(),
            total: Joi.string().required()
        })
    ).required(),
    status: Joi.string().valid('pending', 'processing', 'completed', 'cancelled').required(),
    totalAmount: Joi.string().required(),
    shippingAddress: Joi.string().required(),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
})

module.exports = ordersModelValidation;