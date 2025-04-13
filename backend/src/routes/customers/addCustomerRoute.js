const express = require("express");
const router = express.Router();
const customerController = require('../../controllers/CustomerController');
const {statusCodes} = require('../../constants/constants');
const addCustomerValidation = require('../../validations/addCustomerValidation')

router.post('/add-customer' , async (req , res)=>{
    try{
        const {error} = addCustomerValidation.validate(req.body);
        
         if(error){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message:"Error request body fields" ,error:error.message})
        }

        const {firstName , lastName , email , phone , street , city , state , zipCode , country , membership , note} = req.body
        if(!firstName || !lastName || !email || !phone || !street || !city || !state || !zipCode || !country || !membership){
           return res.status(statusCodes.BAD_REQUEST)
           .json({message:"All Fields are required"}) 
        };
        
        await customerController.createCustomer({
            firstName,
            lastName,
            email,
            phone,
            street,
            state,
            city,
            zipCode,
            country ,
            membership ,
            note:note || "Add text to note",
            createdAt:new Date(),
        });
        res.status(statusCodes.CREATED)
        .json({message:"Created new customer successfully"})
    }
    catch(error){
        console.log(error);
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({message : "Internal Server Error" , error:error.message})
    }
})

module.exports = router