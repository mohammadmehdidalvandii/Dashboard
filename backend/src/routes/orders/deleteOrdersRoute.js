const express = require("express");
const router = express.Router();
const ordersController = require("../../controllers/OrdersController");
const {statusCodes} = require('../../constants/constants');

router.post('/delete-order/:id' , async (req , res)=>{
    try{
        const {id} = req.params;
        if(!id){
            res.status(statusCodes.BAD_REQUEST)
            .json("is not found ID");
        };

        await ordersController.deleteOrderById(id)
        res.status(statusCodes.OK)
        .json({
            message:"Delete Order Successfully",
        })
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({  message:"Server Interval Delete Order By id", error:error.message});
    }
})

module.exports = router