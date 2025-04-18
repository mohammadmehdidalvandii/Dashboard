const mongoose = require("mongoose");
const userModelValidation = require('../validations/UserModelValidation')

const Schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    image: String,
    email: String,
    phone: String,
    role: String,
    password: String,
    refreshToken: String,
    timestamp: String,
    createdAt:Date,
    updatedAt:Date,
});

Schema.pre('save', (next)=>{
    const { error } = userModelValidation.validate(this.schema);

    if (error) return next(error);
    next();
});

const model = mongoose.models.Users || mongoose.model("Users", Schema);

module.exports = model;