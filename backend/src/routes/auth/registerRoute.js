const express = require("express");
const router = express.Router();
const userController = require("../../controllers/UserController");
const {hashedPassword} = require('../../utils/auth')
const { statusCodes } = require("../../constants/constants");
const registerValidation = require("../../validations/RegisterValidation");



router.post ('/register' , async(req ,res)=>{
    try{
        // Validate the request body
        const { error } = registerValidation.validate(req.body);
        if (error) {
            return res.status(statusCodes.BAD_REQUEST).json({
                message: "Validation Error", error
            });
        }

        const {username ,  email , phone , password} = req.body;
        const existUser = await userController.getUserExist(email);
        if(existUser){
             return res.status(statusCodes.BAD_REQUEST).json({message:"User email is Exist"})
        } else{
            const passwordHash = await hashedPassword(password);
            const user = await userController.createUser({
                firstName:"",
                lastName:"",
                image:"https://dashboard-admin-api.chbk.app/images/default-image.png",
                username, 
                email, 
                phone, 
                role:"ADMIN",
                password:passwordHash,
                createdAt:new Date()
            });
            res.status(statusCodes.CREATED).json(user)
        }

    } catch(error){
        console.log("error Register =>" , error.message)
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message:"Server Internal Error" , error});
    }
})

module.exports = router;
