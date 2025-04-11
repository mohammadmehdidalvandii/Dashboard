const express = require("express");
const router = express.Router();
const userController = require("../../controllers/UserController");
const {statusCodes} = require('../../constants/constants');
const {verifyPassword , hashedPassword , verifyAccessToken} = require('../../utils/auth');


router.post('/change-password' , async (req ,res)=>{
    try{
        const {currentPassword , password} = req.body;
        if(!currentPassword || !password){
            return res.status(statusCodes.BAD_REQUEST).json({
                message:"CurrentPassword  and password are required"
            })
        };

        const token = req.cookies.token
        if(!token){
            return res.status(statusCodes.UNAUTHORIZED).json({
                message:"Unauthorized Token"
            })
        };

        const decoded = verifyAccessToken(token);
        if(!decoded){
            return res.status(statusCodes.UNAUTHORIZED).json({
                message:"Unauthorized Token exp"
            })
        };

        const user  = await userController.getUserExist(decoded.email);
        if(!user){
            return res.status(statusCodes.NOT_FOUND).json({
                message:"User not found"
            })
        };

        // verify current password
        const isCorrectPassword= await verifyPassword(currentPassword , user.password);
        if(!isCorrectPassword){
            return res.status(statusCodes.BAD_REQUEST).json({
                message:"Current password is incorrect"
            })
        };

        // hash new Password
        const hashPassword = await hashedPassword(password ,10);
        
        await userController.updateUserPassword(decoded.email, hashPassword);
        res.status(statusCodes.OK).json({
            message:"Password updated successfully"
        });

    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
            message:"Internal Server Error" , error:error.message
        })
    }
})


module.exports = router
