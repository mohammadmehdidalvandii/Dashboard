const express = require('express');
const router = express.Router();

router.post("/logout", (req ,res)=>{
    try{
        res.clearCookie("token",{
            httpOnly: true,
            path:"/"
        });
        res.status(200).json({message: "Logged out successfully"});
    }
    catch(error){
        console.log("Error is Logout" ,error);
        res.status(500).json({message:"Internal Server Error Logout" , error:error.message})
    }
})

module.exports = router