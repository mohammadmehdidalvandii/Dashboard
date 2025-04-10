const express = require('express');
const router = express.Router();
const { statusCodes } = require("../../constants/constants")

router.post("/logout", (req ,res)=>{
    try{
        res.clearCookie("token",{
            httpOnly: true,
            path:"/"
        });
        res.status(statusCodes.OK).json({message: "Logged out successfully"});
    }
    catch(error){
        console.log("Error is Logout" ,error);
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message:"Internal Server Error Logout" , error:error.message})
    }
})

module.exports = router