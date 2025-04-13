const mongoose = require('mongoose');
const customersModelValidation = require('../validations/CustomersModelValidation');

const schema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    name:String,
    email:String,
    phone:String,
    address:{
        street:String,
        city:String,
        state:String,
        zipCode:String,
        country:String
    },
    // orders:[]
    membership:String,
    note:String,
    createdAt:Date,
    updatedAt:Date
})

schema.pre("save" , function(next){
    const  {error} = customersModelValidation.validate(this.Schema);
    if(error){
        return next(new Error(error.details[0].message));
    }
    next();
});

const model = mongoose.models.Customers || mongoose.model("Customers", schema);

module.exports = model