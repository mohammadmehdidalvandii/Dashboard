const express = require("express");
const router = express.Router();
const ordersController = require("../../controllers/OrdersController");
const {statusCodes} = require('../../constants/constants');

router.put('/update-order/:id', async(req, res)=>{
    try{
        const {id} = req.params;
        const {status} = req.body;
        if(!status){
            return res.status(statusCodes.BAD_REQUEST)
            .json({message: "Missing required fields"});
        };
        const data = {status}
        const orderUpdate = await ordersController.updateOrderById(id , data);
        if(!orderUpdate){
            return res.status(statusCodes.NOT_FOUND)
            .json({message: "Order not found"});
        }
        res.status(statusCodes.OK)
        .json({
            message:"Update order Successfully",
            data:orderUpdate,
        })
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({
            message:"Server Internal Error",
            error:error.message
        })
    }
})

module.exports = router