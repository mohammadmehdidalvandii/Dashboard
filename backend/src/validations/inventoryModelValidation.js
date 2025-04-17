const joi = require('joi');

const inventoryModelValidation = joi.object({
productID:joi.string().required(),
quantity:joi.string().required(),
category:joi.string().required(),
status:joi.string().required(),
sku:joi.string()
})

module.exports = inventoryModelValidation;