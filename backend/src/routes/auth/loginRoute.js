const express = require("express");
const router = express.Router();
const userController = require('../../controllers/UserController');
const {verifyPassword , generateAccessToken , generateRefreshToken} = require('../../utils/auth');
const { statusCodes } = require("../../constants/constants");
const {loginValidation, message} = require("../../validations/LoginValidation");

router.post("/login", async (req , res)=>{
    try{
        // validate the request body
        const {error} = loginValidation.validate(req.body);
        if(error){
            return res.status(statusCodes.BAD_REQUEST).json({
                message:"Validation Error " , error
            });
        }

        const {email , password} = req.body;
        if(!email || !password){
            return res.status(statusCodes.BAD_REQUEST).json({message : "Email and password are required"});
        }

        const existUser = await userController.getUserExist(email);
        if(!existUser){
            return res.status(statusCodes.BAD_REQUEST).json({message:"User already exist"});
        };

        const isCorrectPassword = await verifyPassword(password , existUser.password);
        if(!isCorrectPassword){
            return res.status(statusCodes.UNPROCESSABLE).json({message : "Invalid password Or Email"});
        }

        const accessToken = generateAccessToken({email});
        const refreshToken = generateRefreshToken({email});
        await userController.loginUser({email , refreshToken});

        res.status(statusCodes.OK)
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
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message:"Internal Server Error" , error:error.message})
    }
})

module.exports = router