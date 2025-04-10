const express = require('express');
const router = express.Router();
const userController = require("../../controllers/UserController");
const {generateAccessToken, generateRefreshToken, verifyRefreshToken} = require('../../utils/auth');
const { message } = require('../../validations/UserModelValidation');

router.post("/refresh-token", async (req , res)=>{
    try{
        const {refreshToken} = req.body;
    if(!refreshToken){
        return res.status(400).json({message: "Refresh token is required"});
    }

    const decoded = verifyRefreshToken(refreshToken);
    if(!decoded){
        return res.status(401).json({message: "Invalid refresh token"});
    }

    const user  = await userController.getUserExist(decoded.email);
    if(!user || user.refreshToken !== refreshToken){
        return res.status(401).json({message:"Invalid Refresh Token and user"})
    };

    const newAccessToken = generateAccessToken({email:decoded.email});
    const newRefreshToken = generateRefreshToken({email:decoded.email});

    await userController.loginUser({email:decoded.email ,refreshToken:newRefreshToken});


    res.status(200)
    .cookie("token" , newAccessToken , {
        httpOnly:true,
        maxAge: 10 * 24 * 60 * 60 *1000,
        path:"/"
    })
    .json(
        {message:"Token Refreshed successfully"}
    )

    }
    catch(error){
        console.log("Error Refresh token =>" , error);
        res.status(500).json({message:"Internal Server Error Refresh-token" , error:error.message})
    }
})


module.exports = router