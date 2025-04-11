const userModel = require("../models/Users");

exports.createUser = async (data)=>{
    const user = userModel.create(data)
    return user;
}

exports.getUserExist = async (email)=>{
    const users = await userModel.findOne({email:email});
    return users
}

exports.loginUser = async ({email , refreshToken})=>{
    const user = await userModel.findOneAndUpdate(
        {email:email},
        {$set:{refreshToken}}
    );
    return user;
}

exports.updateUserPassword = async({email , password})=>{
    const user = userModel.updateOne({email:email},{$set:{password:password}});
    return user;
}
