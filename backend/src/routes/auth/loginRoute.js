const express = require("express");
const router = express.Router();
const userController = require('../../controllers/UserController');
const {verifyPassword , generateAccessToken , generateRefreshToken} = require('../../utils/auth');


router.post("/login", async (req , res)=>{
    try{
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(400).json({message : "Email and password are required"});
        }

        const existUser = await userController.getUserExist(email);
        if(!existUser){
            return res.status(400).json({message:"User already exist"});
        };

        const isCorrectPassword = await verifyPassword(password , existUser.password);
        if(!isCorrectPassword){
            return res.status(401).json({message : "Invalid password Or Email"});
        }

        const accessToken = generateAccessToken({email});
        const refreshToken = generateRefreshToken({email});
        await userController.loginUser({email , refreshToken});

        res.status(200)
        .cookie("token" ,accessToken ,{
            httpOnly:true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            path:"/"
        })
        .json({
            message : "Login Successfully",
        })

    } 
    catch(error){
        console.log("Error => " , error);
        res.status(500).json({message:"Internal Server Error" , error:error.message})
    }
})

module.exports = router