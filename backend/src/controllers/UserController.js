const userModel = require("../models/Users");

exports.createUser = async (data)=>{
    const user = userModel.create(data)
    return user;
}

exports.getUserExist = async (email)=>{
    const users = await userModel.findOne({email:email});
    return users
}
