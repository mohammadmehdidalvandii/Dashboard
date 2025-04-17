const inventoryModelValidation = require('../validations/inventoryModelValidation')
const mongoose = require("mongoose");
require('./Products');

const schema = new mongoose.Schema({
  productID:{
    type: mongoose.Types.ObjectId,
    ref:"Products",
  },
  quantity:String,
  category:String,
  status:String,
  sku:String,
})


schema.pre("save" , function(next){
    const {error} = inventoryModelValidation.validate(this.Schema);
    if(error){
        return next(error);
    };
    next()
})


const model = mongoose.models.Product || mongoose.model("Product" ,schema);

module.exports = model