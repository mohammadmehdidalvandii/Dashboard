const customerModel = require('../models/Customers');

exports.getAllCustomer = async ()=>{
    const customer = await customerModel.find().sort({createdAt:-1});
    return customer
};

exports.getCustomerByUsername = async (name)=>{
    const customer = await customerModel.findOne({name});
    return customer
};

exports.getCustomerById = async (id)=>{
    const customer = await customerModel.findOne({_id: id});
    return customer
}

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
        createdAt:new Date(),
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