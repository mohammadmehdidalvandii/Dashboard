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
});

router.get('/details-customer/:id', async (req , res)=>{
    try{
        const id = req.params.id;
        console.log("id" , id)
        if(!id){
            return res.status(statusCodes.BAD_REQUEST)
                .json({message: "ID is required"});
        };
        const customer = await customerController.getCustomerById(id);
        if(!customer){
            return res.status(statusCodes.NOT_FOUND)
            .json({message: "customer not found"});
        };
    
        return res.status(statusCodes.OK)
                    .json({
                        data: customer,
                        message: "Get Customer successfully"
                    });
    }
     catch(error){
        return res.status(statusCodes.INTERNAL_SERVER_ERROR)
            .json({message: "Error getting Customer by id", error: error.message});
     }

})

module.exports = router