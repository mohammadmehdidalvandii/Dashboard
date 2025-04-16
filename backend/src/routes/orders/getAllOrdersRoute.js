const express = require("express");
const router = express.Router();
const ordersController = require("../../controllers/OrdersController");
const {statusCodes} = require('../../constants/constants');


router.get("/", async (req, res)=>{
    try{

        const orders = await ordersController.getAllOrders();
        console.log("orders" , orders)
        res.status(statusCodes.OK)
        .json({
            message:"Get All order Successfully",
            data:orders
        })
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({message:"Server Error Interval " ,error:error.message});
    }
})

router.get("/:id", async (req, res)=>{
    try{
        const {id} = req.params
        if(!id){
            res.status(statusCodes.BAD_REQUEST)
            .json({message:"ID is not found"})
        }
        const orders = await ordersController.deleteOrderById(id);
        console.log("orders" , orders)
        res.status(statusCodes.OK)
        .json({
            message:"Get All order Successfully",
            data:orders
        })
    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .json({message:"Server Error Interval " ,error:error.message});
    }
})



module.exports = router