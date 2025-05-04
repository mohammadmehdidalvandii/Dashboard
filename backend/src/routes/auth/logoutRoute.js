const express = require('express');
const router = express.Router();
const { statusCodes } = require("../../constants/constants")

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Logged out successfully
 *         headers:
 *           Set-Cookie:
 *             schema:
 *               type: string
 *               description: Clears the authentication cookie
 *       500:
 *         description: Server error
 */
router.post("/logout", (req ,res)=>{
    try{
        res.clearCookie("token",{
            httpOnly:true,
            secure:true,
            sameSite:'none',
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