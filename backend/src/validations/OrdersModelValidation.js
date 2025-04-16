const Joi = require("joi");

const ordersModelValidation = Joi.object({
    customerID: Joi.string().required(),
      productID: Joi.string().required(),
    status: Joi.string().valid('pending', 'processing', 'completed', 'cancelled').required(),
    shippingAddress: Joi.array(),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
})

module.exports = ordersModelValidation;