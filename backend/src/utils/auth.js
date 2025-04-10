const {sign , verify} = require("jsonwebtoken");
const {hash ,compare} = require("bcryptjs");



// Created AccessToken
const generateAccessToken = (data)=>{
    const securityCodeAccess = process.env.SECURITY_ACCESS_TOKEN
    if(!securityCodeAccess){
        throw new Error("Access token secret is not defined in environment variables")
    };
    try{
        const token = sign(data , securityCodeAccess , {expiresIn:"1h"})
        return token
    } catch(error){
        throw new Error(`Invalid access token = ${error.message}`)
    }
};

// Verify AccessToken
const verifyAccessToken = (token)=>{
    const securityCodeAccess = process.env.SECURITY_ACCESS_TOKEN
    if(!securityCodeAccess){
        throw new Error("Access token secret is not defined in environment variables")
    };
    try{
        const tokenPayload = verify(token , securityCodeAccess);
        return tokenPayload
    } catch(error){
        throw new Error(`Invalid verify access token = ${error.message}`)
    }
};


// Created RefreshToken
const generateRefreshToken = (data)=>{
    const securityCodeRefresh = process.env.SECURITY_REFRESH_TOKEN
    if(!securityCodeRefresh){
        throw new Error("Refresh token secret is not defined in environment variables")
    };
    try{
        const token = sign(data ,securityCodeRefresh , {expiresIn:"10d"})
        return token
    } catch(error){
        throw new Error(`Invalid refresh token = ${error.message}`)
    }
};

// Verify RefreshToken
const verifyRefreshToken = (token)=>{
    const securityCodeRefresh = process.env.SECURITY_REFRESH_TOKEN
    if(!securityCodeRefresh){
        throw new Error("Refresh token secret is not defined in environment variables")
    };
    try{
    const tokenPayload = verify(token , securityCodeRefresh);
    return tokenPayload
    } catch(error){
        throw new Error(`Invalid verify refresh token = ${error.message}`)
    }
}


// Created HashPassword
const hashedPassword = async (password)=>{
    const hashPassword = await hash(password ,10)
    return hashPassword
}


// Verify HashPassword
const verifyPassword = async (password , hashedPassword)=>{
    const isValid = await compare(password , hashedPassword)
    return isValid
}


module.exports = {
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    verifyRefreshToken,
    hashedPassword,
    verifyPassword
}