const mongoose = require("mongoose");
const productModelValidation = require('../validations/ProductModelValidation');

const schema = new mongoose.Schema({
    name :String,
    description:String,
    price:String,
    category:String,
    image:[String],
    stock:String,
    sku:String,
    status:Boolean,
    createdAt:Date,
    updatedAt:Date,
});


schema.pre("save" , (next)=>{
    const {error} = productModelValidation.validate(this.schema);
    if(error) return next(error);
    next()
})

const model = mongoose.models.Products || mongoose.model("Products" , schema);

module.exports = model;
