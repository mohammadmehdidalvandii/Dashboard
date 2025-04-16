const express = require("express");
const router = express.Router();
const ordersController = require("../../controllers/OrdersController");
const {statusCodes} = require('../../constants/constants');
const customerModel = require('../../models/Customers');
const productModel = require('../../models/Products');

router.post('/add-orders' , async (req , res)=>{
    try{
        const {customerID , productID , status , totalAmount , shippingAddress} = req.body;
        if(!customerID || !productID || !status || !totalAmount){
            return res.status(statusCodes.BAD_REQUEST)
            .json({
                message : "Please fill all the fields"
            })
        };

        const existCustomer = await customerModel.findOne({_id:customerID});
        console.log("existCustomer" , existCustomer)
        if(!existCustomer){
            return res.status(statusCodes.NOT_FOUND)
            .json({
                message:"customer Not Found"
            })
        };
        const existProduct = await productModel.findOne({_id:productID});
        console.log("existProduct" , existProduct)
        if(!existProduct){
            return res.status(statusCodes.NOT_FOUND)
            .json({
                message:"Product Not found"
            })
        };
        const newOrder = await ordersController.createOrder({
         customerID:existCustomer._id,
         productID:existProduct._id,
         status,
         totalAmount,
         shippingAddress :existCustomer.address,
        })
        res.status(statusCodes.CREATED)
        .json({
            message:"Create new Order",
            data:newOrder
        })

    }
    catch(error){
        res.status(statusCodes.INTERNAL_SERVER_ERROR)
        .jsonp(
            {
                message:"Server addOrder error", error:error.message
            }
        )
    }
})

module.exports = router