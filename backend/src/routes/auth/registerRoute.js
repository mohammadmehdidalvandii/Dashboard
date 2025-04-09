const express = require("express");
const router = express.Router();
const userController = require("../../controllers/UserController");
const {hashedPassword} = require('../../utils/auth')


router.get('/users' ,async (req ,res)=>{
    const users = await userController.getAllUsers();
    res.status(200).json(users)
})

router.post ('/register' , async(req ,res)=>{
    try{
        const {username ,  email , phone , password} = req.body;
        if(!username || !email || !phone || !password){
            return res.status(400).json({message : "Please fill all the fields"});
        };

        const existUser = await userController.getUserExist(email);
        if(existUser){
             return res.status(400).json({message:"User email is Exist"})
        } else{
            const passwordHash = await hashedPassword(password);
            const user = await userController.createUser({
                firstName:"",
                lastName:"",
                image:"http://localhost:3000/images/default-image.png",
                username, 
                email, 
                phone, 
                role:"ADMIN",
                password:passwordHash
            });
            res.status(201).json(user)
        }


    } catch(error){
        console.log("error Register =>" , error.message)
        res.status(500).json({message:"Server Internal Error" , error});
    }
})

module.exports = router;
