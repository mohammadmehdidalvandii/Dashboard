const express = require("express");
const router = express.Router();
const customerController = require('../../controllers/CustomerController');
const {statusCodes} = require('../../constants/constants');

router.get('/' , async(req , res)=>{
    try{
        const {name} = req.query;
        if(name){
            const customer = await customerController.getCustomerByUsername(name);
            res.status(statusCodes.OK)
            .json({message:"Get customer by username successfully",data:customer});
        } else{
            const customers = await customerController.getAllCustomer();
            res.status(statusCodes.OK)
            .json({message:"Get all customers successfully",data:customers});
        }
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message : "Internal Server Error" , error:error.message})
    }
})

module.exports = router