const customerModel = require('../models/Customers');

exports.getAllCustomer = async ()=>{
    const customer = await customerModel.find();
    return customer
};

exports.getCustomerByUsername = async (firstName)=>{
    const customer = await customerModel.findOne({firstName});
    return customer
};

exports.createCustomer = async (data)=>{
    const customer = await customerModel.create(data);
    return customer
};

exports.updateCustomer = async (id , data)=>{
    const {
        firstName,
        lastName,
        email,
        phone,
        street,
        city,
        state,
        zipCode,
        country,
        membership,
        note,
    } = data;

    const customer = await customerModel.findOneAndUpdate(
        {_id:id},
        {
            firstName,
        lastName,
        email,
        phone,
        street,
        city,
        state,
        zipCode,
        country,
        membership,
        note, 
        updatedAt: new Date(),
        },
        {new:true}
    )
    return customer
};


exports.deleteCustomerById = async (id)=>{
    const customer = await customerModel.findOneAndDelete({_id:id})
    return customer
}