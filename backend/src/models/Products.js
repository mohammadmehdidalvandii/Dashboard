const mongoose = require("mongoose");
const productModelValidation = require('../validations/ProductModelValidation');

const schema = new mongoose.Schema({
    name :String,
    description:String,
    price:String,
    category:String,
    image:String,
    stock:String,
    sku:String,
    status:String,
    createdAt:Date,
    updatedAt:Date,
});

schema.pre("save", function(next) {
    const { error } = productModelValidation.validate(this.Schema);
    if (error) {
        return next(new Error(error.details[0].message));
    }
    next();
});

const model = mongoose.models.Products || mongoose.model("Products", schema);

module.exports = model;
