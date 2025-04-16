const Joi = require("joi");

const ordersModelValidation = Joi.object({
    customerID: Joi.string().required(),
      productID: Joi.string().required(),
    status: Joi.string().valid('pending', 'processing', 'completed', 'cancelled').required(),
    totalAmount: Joi.string().required(),
    shippingAddress: Joi.string(),
    createdAt: Joi.date(),
    updatedAt: Joi.date()
})

module.exports = ordersModelValidation;