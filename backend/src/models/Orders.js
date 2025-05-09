const mongoose = require('mongoose');
require('./Customers')
require('./Products')

const ordersModelValidation = require('../validations/OrdersModelValidation')

const schema = new mongoose.Schema({
    customerID:{
        type: mongoose.Types.ObjectId,
        ref:"Customers"
    },

    products:[{
        productID:{
            type: mongoose.Types.ObjectId,
            ref:"Products"
        }
    }],
    status:String,
    shippingAddress: Array,
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


