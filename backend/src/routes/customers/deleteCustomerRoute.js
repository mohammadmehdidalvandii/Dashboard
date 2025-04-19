const express = require('express');
const router = express.Router();
const customerController = require('../../controllers/CustomerController');
const {statusCodes} = require('../../constants/constants');

router.delete('/delete-customer/:id', async (req , res)=>{
    try{
        // const customerID = req.params.id;
        const {id} = req.params;
        if(!id){
            return res.status(statusCodes.NOT_FOUND),json({
                message:"Customer id id required"
            })
        };
        const deleteCustomer = await customerController.deleteCustomerById(id);
        if(!deleteCustomer){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message:"Delete Product failed"})
        }
        return res.status(statusCodes.OK)
        .json({
            data:deleteCustomer,
            message:"Customer deleted successfully"
        })
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR).json({message:"Server Error internal Delete Customer", error:error.message});
    }
})

module.exports = router