const mongoose = require('mongoose');
require('./Customers')

const ordersModelValidation = require('../validations/OrdersModelValidation')

const schema = new mongoose.Schema({
    customerID:{
        type: mongoose.Types.ObjectId,
        ref:"Customers"
    },

    items:[{
        productID:String,
        quantity:String,
        price:String,
        total:String
    }],
    status:String,
    totalAmount:String,
    shippingAddress:{
        type:mongoose.Types.ObjectId,
        ref:"Customers"
    },
    createdAt:Date,
    updatedAt:Date
})


schema.pre("save" , function(next){
    const {error} = ordersModelValidation.validate(this.Schema);
    if(error){
        return next(error);
    };
    next()
})

const model = mongoose.models.Orders || mongoose.model("Orders" , schema);

module.exports = model


